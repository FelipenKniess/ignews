
import { GetStaticProps, GetStaticPaths } from "next"
import { RichText } from 'prismic-dom';
import { DataDocumentsPrismic } from "../";
import { PrismicClient } from "../../../services/prismic";
import styles from '../post.module.scss';
import Head from 'next/head';
import Link from 'next/link'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
/* eslint-disable react-hooks/exhaustive-deps */

interface PostPreviewProps {
    post: {
        slug: string;
        title: string;
        content: string;
        updateAt: string;

    }
}

export default function PostPreviw({post}:  PostPreviewProps) {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if(session.data?.activeSubscription){
            router.push(`/posts/${post.slug}`)
        }
    }, [session]);

    return(
        <>
            <Head>
                <title>{post.title} | Ignews</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updateAt}</time>
                    <section className={`${styles.postContent} ${styles.previewContent}`} dangerouslySetInnerHTML={{__html:post.content}}/>

                    <div className={styles.continueReading}>
                        Wanna continue reading?
                        <Link href="/">
                            <a href="">Subscribe now 😁</a>
                        </Link>
                    </div>
                </article>
            </main>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;

    const prismic = PrismicClient();
    const response = await prismic.getByUID<DataDocumentsPrismic>('publication', String(slug), {})

    const post ={
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content.splice(0, 3)),
        updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return {
        props: {
            post
        },
        revalidate: 60 * 30 //30 minutes
    }
}
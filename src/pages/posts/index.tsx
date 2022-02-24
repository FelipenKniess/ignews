import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.scss';
import { PrismicClient } from '../../services/prismic';
import Prismic from "@prismicio/client";
import { RichText } from 'prismic-dom';
import Link from 'next/link';


export type DataDocumentsPrismic = {
    title?: string,
    content?: Array<{
        type: string,
        text: string
    }>,
}

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updateAt: string;
}

interface PostProps {
    posts: Post[]
}

export default function Posts({posts}: PostProps){
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        <Link key={post.slug} href={`/posts/${post.slug}`}>
                            <a  href="#">
                                <time>{post.updateAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}

export const getStaticProps:GetStaticProps = async () => {
    const prismic = PrismicClient();

    const document = await prismic.query<DataDocumentsPrismic>(
    [
        Prismic.Predicates.at('document.type', 'publication')
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100
    })

    const posts = document.results.map((post) => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: {
            posts
        },
    }
}
import styles from './styles.module.scss';
import { useRouter  } from 'next/router';
import {SignInButton} from '../SignInButton';
import LinkMenu from '../../components/LinkMenu';

export default function Header (){

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <LinkMenu activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </LinkMenu>
                    <LinkMenu href="/posts" activeClassName={styles.active} prefetch>
                        <a>Posts</a>
                    </LinkMenu>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}
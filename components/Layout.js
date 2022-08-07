import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const Layout = ({ children }) => {
    const name = 'Top Gun';
    const siteTitle = 'Next.js practice';
    return (
        <div className={styles.container}>
            <Head>
                <link rel="stylesheet" href="/favicon.ico" />
                <title>{siteTitle}</title>
            </Head>
            <header className={styles.header}>
                <Image
                    src={'/TopGun.jpg'}
                    width={'100'}
                    height={'100'}
                    className={utilStyles.borderCircle}
                ></Image>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
            <div>
                <Link href={'/'}>Home</Link>
            </div>
        </div>
    );
};

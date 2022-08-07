import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { getPostsData } from '../lib/post';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

// SSG
export async function getStaticProps() {
    const allPostsData = getPostsData();
    console.log(allPostsData);

    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout>
            <section className={utilStyles.headingMd}>
                <p>Next jsのプラクティス中です。</p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2>📝エンジニアのブログ</h2>
                <div className={styles.grid}>
                    {allPostsData.map(({ id, title, date, thumbnail }) => {
                        return (
                            <article key={id}>
                                <Link href={`/posts/${id}`}>
                                    <img
                                        src={`${thumbnail}`}
                                        className={styles.thumbnailImage}
                                    />
                                </Link>
                                <Link href={`/posts/${id}`}>
                                    <a className={utilStyles.boldText}>
                                        {title}
                                    </a>
                                </Link>
                                <br />
                                <small className={utilStyles.lightText}>
                                    {date}
                                </small>
                            </article>
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
}

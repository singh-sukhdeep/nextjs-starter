import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
                <img src="/images/profile.jpg" alt="Your Name" />
            </h2>
        </>
    );
}
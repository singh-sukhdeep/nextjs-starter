
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <Head>
        <title>Home</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h2>Sukhdeep</h2>
        <Link href="/posts/first-post">Go to Posts</Link>
      </main>
    </>

  )
}

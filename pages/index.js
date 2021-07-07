import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe ME</title>
        <meta name="description" content="Your recipe collection." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <p>Testing 123 main</p>
      </main>

      <footer>
        <p style={{ fontSize: 'small' }}>Copyright recipeME 2021</p>
      </footer>
    </div>
  )
}

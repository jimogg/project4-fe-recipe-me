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
        <p style={{ fontSize: '2em' }}>Welcome to</p>
        <p style={{ fontSize: '7em', fontWeight: 'bold', margin: '0' }}>RecipeME</p>
        <p style={{ fontSize: '1.5em' }}>Where you can find recipes that will delight your senses.</p>
      </main>

      <footer>
        <p style={{ fontSize: 'small' }}>Copyright recipeME 2021</p>
      </footer>
    </div>
  )
}

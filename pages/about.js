import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'
import About from '../components/About';

const about = () => {
    return (
        // <div>
        // <Nav />

        // </div>
        <div className={styles.container}>
            <Head>
                <title>Recipe ME</title>
                <meta name="description" content="Your recipe collection." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className={styles.main}>
                <p>Testing 123 main</p>
                <About />
            </main>

            <footer>
                <p>Testing 123 Footer.</p>
            </footer>
        </div>
    );
};

export default about;
import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'
import About from '../components/About';

const about = () => {
    return (

        <div className={styles.container}>
            <Head>
                <title>Recipe ME</title>
                <meta name="description" content="Your recipe collection." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className={styles.main}>
                <div style={{ margin: '5px 15px' }}>
                    <p>Read here to find out more about us.</p>
                    <About />
                </div>
            </main>

            <footer>
                <p style={{ fontSize: 'small' }}>Copyright recipeME 2021</p>
            </footer>
        </div>
    );
};

export default about;
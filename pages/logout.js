import React, { useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';

const Loggedout = () => {

    (function clearLogin() {
        if (typeof window !== 'undefined') {

            localStorage.removeItem('auth_token')
            localStorage.removeItem('user')
        }

    })();

    if (typeof window !== 'undefined') {
        setTimeout(() => { window.location.href = '/' }, 1000)
    }

    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Recipe ME</title>
                    <meta name="description" content="Your recipe collection." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Nav />
                <main className={styles.main}>
                    <p style={{ fontSize: '1.5em' }}>You have successfully logged out!</p>
                    {/* <p style={{ margin: '0' }}>Redirecting to homepage...</p> */}
                </main>

                <footer>
                    <p style={{ fontSize: 'small' }}>Copyright recipeME 2021</p>
                </footer>

            </div>
        </>
    );
};


export default Loggedout;
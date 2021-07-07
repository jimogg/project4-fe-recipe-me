import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';
import RecipeDetails from '../components/RecipeDetails';

const RecipePage = () => {

    const router = useRouter()
    const { pid } = router.query
    return (
        <>
            <Nav />
            <RecipeDetails />
            {/* <p>RecipePage: {pid} </p> */}
        </>
        // <div className={styles.container}>
        //     <Head>
        //         <title>Recipe ME</title>
        //         <meta name="description" content="Your recipe collection." />
        //         <link rel="icon" href="/favicon.ico" />
        //     </Head>
        //     <Nav />
        //     <main className={styles.main}>
        //         <p>Testing 123 main</p>
        //         <RecipeDetails />
        //     </main>

        //     <footer>
        //         <p>Testing 123 Footer.</p>
        //     </footer>
        // </div>

    );
};

export default RecipePage;
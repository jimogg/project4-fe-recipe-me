import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Recipes from '../components/Recipes'

const recipes = () => {
    return (
        <div>
            <Head>
                <title>Recipe ME</title>
                <meta name="description" content="Your recipe collection." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main >
                {/* outer div */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    height: '60px',
                    background: 'black',
                }}>
                    {/* inner div (tab)1*/}
                    <div style={{
                        marginLeft: '20px',
                        padding: '8px 15px',
                        background: '#CE3045',
                        background: 'white',
                        fontWeight: 'bold',
                        // color: 'white',
                        borderRadius: '5px 5px 0 0',
                        height: '32px'
                    }}>Recipes</div>

                    {/* inner div (tab)2*/}
                    <div style={{
                        marginLeft: '5px',
                        padding: '8px 15px',
                        background: '#CE3045',
                        fontWeight: 'bold',
                        // color: 'white',
                        borderRadius: '5px 5px 0 0',
                        height: '32px'
                    }}>My Collection</div>

                </div>
                <div style={{

                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    padding: '15px',
                }}>
                    <Recipes />
                </div>
            </main>

            <footer>
                <p>Testing 123 Footer.</p>
            </footer>
        </div>
    );
};

export default recipes;
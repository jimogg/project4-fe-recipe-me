import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';
import Recipes from '../components/Recipes';

const recipes = () => {
    return (
        <div>
            <Head>
                <title>Recipe ME</title>
                <meta name="description" content="Your recipe collection." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main style={{ background: '#ccc' }}>
                {/* outer top div (bar) */}
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
                        padding: '7px 15px',
                        background: '#CE3045',
                        background: 'white',
                        // fontSize: '1.2em',
                        // borderRadius: '5px 5px 0 0',
                        height: '32px'
                    }}>Recipes</div>

                    {/* inner div (tab)2*/}
                    {/* <div style={{
                        marginLeft: '5px',
                        padding: '6px 15px',
                        background: '#CE3045',
                        // fontWeight: 'bold',
                        fontSize: '1.2em',
                        // borderRadius: '5px 5px 0 0',
                        height: '32px'
                    }}>My Kitchen</div> */}

                    {/* inner div (tab)3*/}
                    <div style={{
                        marginLeft: '2px',
                        padding: '8px 15px',
                        background: '#8BC751',
                        fontWeight: 'bold',
                        // borderRadius: '5px 5px 0 0',
                        height: '32px'
                    }}>Discover something new</div>

                </div>
                <div style={{

                    display: 'flex',
                    // flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    padding: '15px',
                    // background: '#CE3045',
                }}>
                    <Recipes />
                </div>
            </main>

            <footer>
                <p>{' '}</p>
            </footer>
        </div>
    );
};

export default recipes;
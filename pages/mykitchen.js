import React from 'react';
import Nav from '../components/Nav';
import FavChefs from '../components/FavChefs';
import FavRecipes from '../components/FavRecipes';
import Link from 'next/link';

const mykitchen = () => {
    return (
        <>
            <Nav />
            <div className="container" style={{
                background: '#E6E6E6',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 3fr 1fr',
                    // gridTemplateRows: '1fr 3fr 1fr'
                }}>

                    {/* Left side pane with avatar picture */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: '#8BC751',
                        padding: '10px 0'
                    }}>
                        <div className='avatar' style={{
                            marginTop: '15px',
                            background: 'white',
                            backgroundImage: 'url(https://team-j-names-media.s3.us-east-2.amazonaws.com/Ratatouille_sm.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            width: '160px',
                            height: '160px',
                            border: '5px solid #CE3045',
                            borderRadius: '50%',
                        }}>{' '}</div>

                        <h2>This is your kitchen</h2>

                        <p style={{ fontSize: '0.9rem', margin: '0 15px' }}>You can view your saved recipes, favorite chefs and more here.</p>
                        <FavChefs />
                    </div>
                    <div style={{
                        // background: 'gray',
                        padding: '15px'
                    }}>
                        {/* outer div */}
                        <div style={{
                            background: 'black',
                            color: 'white',
                            border: '1px solid #E6E6E6',
                            borderRadius: '15px 15px 0 0',
                        }}><div style={{ padding: '0 10px' }}>
                                <h1>My Kitchen</h1>
                                <Link href="createrecipe">
                                    <a>Create a new recipe |</a></Link>
                                <Link href="recipes">
                                    <a>{' '}Browse recipes</a></Link>

                            </div>
                            {/* main article body */}
                            <section style={{
                                background: 'white',
                                color: 'black',
                                padding: '15px 30px',
                                marginTop: '30px',
                                // height: '80vh',
                                borderRadius: '15px 15px 0 0'
                            }}>
                                <FavRecipes />
                            </section>
                        </div>
                    </div>
                    <div style={{
                        background: '#CE3045',
                        padding: '10px'
                    }}>

                    </div>

                </div>
            </div>
        </>
    );
};

export default mykitchen;
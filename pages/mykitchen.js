import React from 'react';
import Nav from '../components/Nav';
import UserDetails from '../components/UserDetails';
import UsersRecipes from '../components/UsersRecipes';

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

                    <div style={{
                        background: '#8BC751',
                        padding: '10px'
                    }}>
                        <div style={{
                            background: 'white',
                            width: '160px',
                            height: '160px',
                            border: '5px solid #CE3045',
                            borderRadius: '50%',
                        }}>avatar</div>

                        <h3>This is your kitchen</h3>

                        <p style={{ fontSize: '0.9rem' }}>You can view your saved recipes and stuff.</p>
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
                            // padding: '10px',
                            borderRadius: '15px 15px 0 0'
                        }}><div style={{ padding: '0 10px' }}><p>Whaaaaaat</p></div>
                            <section style={{
                                background: 'white',
                                color: 'black',
                                padding: '15px',
                                marginTop: '30px',
                                borderRadius: '15px 15px 0 0'
                            }}>
                                <UserDetails />
                                <UsersRecipes />
                            </section>
                        </div>
                    </div>
                    <div style={{
                        background: '#CE3045',
                        padding: '10px'
                    }}>
                        <p>This is the right hand side div</p>
                    </div>


                    {/* want a list of my posted recipes (by chef_id)
            a list of my saved recipes
            
            url/chefs/:id .... returns an object with name and array of recipies

            map over it
            */}

                </div>
            </div>
        </>
    );
};

export default mykitchen;
import React from 'react';
import Nav from '../components/Nav';
import UserDetails from '../components/UserDetails';

const mykitchen = () => {
    return (
        <>
            <Nav />
            <div style={{
                display: 'grid',
                // gridTemplateColumns: '1fr 3fr 1fr',
                gridTemplateRows: '1fr 3fr 1fr'
            }}>

                <div style={{
                    background: 'blue',
                    padding: '10px'
                }}>
                    <p>This is mykitchen</p>
                </div>
                <div style={{
                    background: 'gray',
                    padding: '15px'
                }}>
                    <UserDetails />
                </div>
                <div style={{
                    background: 'yellow',
                    padding: '10px'
                }}>
                    <p>This is the right hand side div</p>
                </div>


                {/* want a list of my posted recipes (by chef_id)
            a list of my saved recipes
            
            url/chefs/:id .... returns an object with name and array of recipies

            map over it
            */}

            </div></>
    );
};

export default mykitchen;
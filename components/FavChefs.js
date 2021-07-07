import React, { useEffect, useState } from 'react';

const UserDetails = () => {

    const url = `http://localhost:8000/chefs/?format=json`

    const [chef, setChef] = useState('')

    async function fetchDetails() {
        const response = await fetch(url);
        const chefs = await response.json();

        const chefInfo = chefs.map((e) => {

            return <>
                <p style={{ margin: '2px' }}>{e.name}</p>
            </>

        })

        setChef(chefInfo)
    }

    useEffect(() => {
        fetchDetails()
    }, [])

    return (
        <div style={{
            background: 'white',
            marginTop: '20px',
            width: '100%',
            padding: '5px 15px 15px 22px',
            borderTop: '8px solid #CE3045',
            textAlign: 'center',
            // borderRadius: '10px'
        }}>
            <h3>My Favorite Chefs</h3>
            <p>{chef}</p>

        </div>
    );
};

export default UserDetails;
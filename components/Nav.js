import React from 'react';

const Nav = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#cccccc', width: '100%',
            background: '#333333',
            height: '50px'
        }}>

            <div>LOGO</div>

            {/* navigation links div*/}
            <div style={{
                display: 'flex',
                width: '25%',
                maxWidth: '300px',
                justifyContent: 'space-between',
            }}>
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
            </div>
            {/* Login links div */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '150px'
            }}>
                <a href="">Log in</a>{' '}<a href="">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;
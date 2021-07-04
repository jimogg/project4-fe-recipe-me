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
                minWidth: '260px',
                justifyContent: 'space-between',
            }}>
                <a href="">Home</a>
                <a href="recipes">Recipes</a>
                <a href="mykitchen">My Kitchen</a>
                <a href="about">About</a>
            </div>

            {/* Login links div */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '150px'
            }}>
                <a href="login">Log in</a>
                <a href="signup">Sign Up</a>
            </div>
            <style jsx>{`
    a:hover{
        color:'green';
    }
`}</style>

        </div>
    );
};

export default Nav;
import React from 'react';
import Link from 'next/link'

const Nav = () => {

    // function login() {
    //     if (localStorage.auth_token) {
    //         return <>
    //             <Link href="logout"><a>Log Out</a></Link>
    //         </>

    //     }
    //     return <>
    //         <Link href="login"><a>Log in</a></Link>
    //         <Link href="signup"><a>Sign Up</a></Link>
    //     </>

    // }

    // const loginNav = login()
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
                <Link href=""><a>Home</a></Link>
                <Link href="recipes"><a>Recipes</a></Link>
                <Link href="mykitchen"><a>My Kitchen</a></Link>
                <Link href="about"><a>About</a></Link>
            </div>

            {/* Login links div */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '150px'
            }}>


                <Link href="login"><a>Log in</a></Link>
                <Link href="signup"><a>Sign Up</a></Link>
                {/* <Link href="logout"><a>Log Out</a></Link> */}

                {/* {loginNav} */}

            </div>

            {/* style jsx? */}

        </div>
    );
};

export default Nav;
import React, { useEffect } from 'react';

const Loggedout = () => {

    (function clearLogin() {
        if (window !== 'undefined') {

            localStorage.removeItem('auth_token')
            localStorage.removeItem('user')
        }
    })();

    return (
        <div>
            You have logged out!
        </div>
    );
};

export default Loggedout;
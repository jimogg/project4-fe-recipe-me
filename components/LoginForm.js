import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';


const SignupForm = () => {

    const formFields = {}

    const [formData, setFormData] = useState(formFields)
    const [message, setMessage] = useState('')
    const [usernameErr, setUsernameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();

        const url = `${API_URL}/token/login/`
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                // if login is successful
                if (result.auth_token) {
                    setMessage('SUCCESSFUL LOGIN! Redirecting to homepage...')
                    console.log(Object.keys(result)[0], Object.values(result)[0])
                    localStorage.setItem(Object.keys(result)[0], Object.values(result)[0])
                    // if token returned, save username
                    localStorage.setItem('user', formData.username)
                    setTimeout(() => { window.location.href = '/' }, 2000)
                }

                for (const property in result) {
                    console.log(result)
                    if (property === 'username') setUsernameErr(result[property])
                    else if (property === 'email') setEmailErr(result[property])
                    else if (property === 'password') setPasswordErr(result[property])
                    else if (property === 'non_field_errors') setMessage(result[property])

                }


            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div className="formWrapper"
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                // background: '#8BC751',
                background: '#e6e6e6',
                height: '90vh',
            }}>

            <h2>Please log in</h2>

            <form onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100vw',
                    maxWidth: '500px',
                    padding: '18px',
                    background: '#CE3045',
                    borderRadius: '10px'
                }}>

                <label htmlFor="username">Username {usernameErr}</label>
                <input id="username" type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="" />

                <label htmlFor="email">email {emailErr}</label>
                <input id="email" type="email"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="" />

                <label htmlFor="password">Password {passwordErr}</label>
                <input id="password" type="password"
                    value={formData.technologies}
                    onChange={handleChange}
                    placeholder="" />

                <br />

                <input type="submit" value="submit" style={{ width: '5em' }} />
            </form>
            <p style={{ fontSize: '14px' }}>{message}</p>

        </div>

    );
};

export default SignupForm;
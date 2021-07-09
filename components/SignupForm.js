import React, { useEffect, useState } from 'react';


const SignupForm = () => {

    const formFields = {}

    const [formData, setFormData] = useState(formFields)
    const [message, setMessage] = useState('')

    const [usernameErr, setUsernameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [repasswordErr, setRepasswordErr] = useState('')

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value })
    }
    const url = 'http://localhost:8000/users/'

    async function signUp() {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const info = await response.json();
        console.log(info)
        // print error messages on input labels
        for (const property in info) {
            if (property === 'id') {
                // display welcome message
                // cond rendering
                // document.querySelector('formWrapper').style.display.display = 'none'
                // document.querySelector('signupSuccess').style.display = 'block'
                setUsernameErr('')
                setEmailErr('')
                setMessage('Congratulations! You have sucessfully created an account!')
                setTimeout(() => { window.location.href = "/login" }, 3000)
            }



            else if (property === 'username') setUsernameErr(info[property])
            else if (property === 'email') setEmailErr(info[property])
            else if (property === 'password') setPasswordErr(info[property])
            else if (property === 're_password') setRepasswordErr(info[property])
            else if (property === 'non_field_errors') setMessage(info[property])
        }

    }

    function handleSubmit(event) {
        event.preventDefault();
        // clear error messages
        setUsernameErr('')
        setEmailErr('')
        setPasswordErr('')
        setRepasswordErr('')
        // run signup function
        signUp()

    };

    return (
        <>
            <div className='signupSuccess'>WELCOME!</div>
            <div className="formWrapper"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    // background: '#8BC751',
                    background: '#e6e6e6',
                    height: '90vh'
                }}>
                <h2>Enter your information to sign up.</h2>
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

                    <label htmlFor="username">Username <span style={{
                        color: '#ccc',
                        fontSize: '14px',
                    }}>{usernameErr}</span></label>
                    <input id="username" type="text"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="" />

                    <label htmlFor="email">email < span style={{
                        color: '#ccc',
                        fontSize: '14px',
                    }}>{emailErr}</span></label>
                    <input id="email" type="email"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="" />

                    <label htmlFor="password">Password <span style={{
                        color: '#ccc',
                        fontSize: '14px',
                    }}>{passwordErr}</span></label>
                    <input id="password" type="password"
                        value={formData.technologies}
                        onChange={handleChange}
                        placeholder="" />

                    <label htmlFor="re_password">Retype Password <span style={{
                        color: '#ccc',
                        fontSize: '14px',
                    }}>{repasswordErr}</span></label>
                    <input id="re_password" type="password"
                        value={formData.githubUrl}
                        onChange={handleChange}
                        placeholder="" />

                    <br />

                    <input type="submit" value="submit" style={{ width: '5em' }} />
                </form>
                <div className='message' style={{ marginTop: '15px' }}>{message}</div>
            </div>
        </>

    );
};

export default SignupForm;
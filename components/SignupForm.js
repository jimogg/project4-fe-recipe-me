import React, { useEffect, useState } from 'react';


const SignupForm = () => {

    const formFields = {}

    const [formData, setFormData] = useState(formFields)


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();

        const url = 'http://localhost:8000/users/'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                // setProject(result)
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

                <label htmlFor="username">Username</label>
                <input id="username" type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="" />

                <label htmlFor="email">email</label>
                <input id="email" type="email"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="" />

                <label htmlFor="password">Password</label>
                <input id="password" type="password"
                    value={formData.technologies}
                    onChange={handleChange}
                    placeholder="" />

                <label htmlFor="re_password">Retype Password</label>
                <input id="re_password" type="password"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    placeholder="" />

                <br />

                <input type="submit" value="submit" style={{ width: '5em' }} />
            </form>
            <p>{' '}</p>
        </div>

    );
};

export default SignupForm;
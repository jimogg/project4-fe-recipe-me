import React, { useEffect, useState } from 'react';


const CreateRecipeForm = () => {

    const formFields = { chef_id: 2, chef_name: "Homer Simpson" }

    const [formData, setFormData] = useState(formFields)


    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();

        const url = 'http://localhost:8000/recipes/'
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
                setProject(result)
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
                background: '#8BC751',
            }}>

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

                <label htmlFor="title">Title of Recipe</label>
                <input id="title" type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="" />

                <label htmlFor="subtitle">Subtitle (descriptive)</label>
                <input id="subtitle" type="text"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="" />

                <label htmlFor="directions">Directions</label>
                <input id="directions" type="text"
                    value={formData.technologies}
                    onChange={handleChange}
                    placeholder="" />

                <label htmlFor="steps">Steps</label>
                <input id="steps" type="text"
                    value={formData.githubUrl}
                    onChange={handleChange}
                    placeholder="" />

                <label htmlFor="summary">Summary</label>
                <textarea id="summary"
                    rows={4}
                    cols={50}
                    value={formData.description}
                    onChange={handleChange}>
                </textarea>

                <br />

                <input type="submit" value="submit" />
            </form>

        </div>

    );
};

export default CreateRecipeForm;
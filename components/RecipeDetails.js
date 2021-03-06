import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Recipes from '../components/Recipes'
import { API_URL } from '../config';

const RecipeDetails = () => {

    const url = `${API_URL}/recipes/4/?format=json`
    const [recipe, setRecipe] = useState('')

    async function fetchRecipes() {
        const response = await fetch(url);
        const recipes = await response.json();

        const recipeInfo = (
            <div className='container' style={{
                display: 'grid',
                gridTemplateColumns: '1fr 3fr 1fr',
                justifyItems: 'center',
                background: '#ccc',
                padding: '15px'
            }}>
                {/* side div */}
                <div style={{
                    marginRight: '15px',
                    padding: '15px',
                    background: '#CE3045',
                    border: '1px solid #ccc',
                    borderRadius: '15px',
                    maxWidth: '300px',
                }}>
                    <h3>More recipes</h3>
                    <p>Cillum velit ut dolor consequat amet aliquip velit sunt aliquip est in commodo.</p>
                </div>

                {/* outer div */}
                <div style={{
                    background: '#8BC751',
                    color: 'white',
                    border: '1px solid #E6E6E6',
                    // padding: '10px',
                    // borderRadius: '15px 15px 0 0'
                }}>
                    <div style={{ padding: '0 10px' }}>
                        <h2 style={{ marginBottom: '0' }}>{recipes.title}</h2>
                        <p style={{ margin: '0', fontSize: '0.9rem', color: '#777' }}>from: {recipes.chef_name}</p>
                    </div>

                    {/* the selected recipe is displayed */}
                    <article style={{
                        maxWidth: '600px',
                        padding: '35px 15px',
                        background: 'white',
                        color: 'black',
                        marginTop: '20px',
                        borderRadius: '15px 15px 0 0'
                    }}>

                        <div>
                            {/* <h2 style={{ margin: '0', color: '#333' }}>{recipes.title}</h2> */}
                            <p style={{ fontWeight: '300', fontSize: '1.1rem' }}>{recipes.subtitle}</p>
                            <h3>Preparations</h3>
                            <p>{recipes.intro}</p>
                            <h3>Steps</h3>
                            <p>{recipes.steps}</p>
                            <p>{recipes.summary}</p>
                        </div>
                    </article>
                    {/* end recipe display */}
                    <div style={{ background: '#8BC751', border: '1px solid #8BC751' }}>
                    </div>
                </div>
                {/* <div><Recipes /></div> */}
            </div>

        )
        setRecipe(recipeInfo)
    }

    useEffect(() => {
        fetchRecipes()
    }, [])

    return (


        <>
            {recipe}
        </>



    );
};


export default RecipeDetails;
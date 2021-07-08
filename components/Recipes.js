import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import RecipeCard from './RecipeCard';

const Recipes = () => {
    const deployedUrl = 'https://nameless-harbor-22439.herokuapp.com/'

    const url = `${deployedUrl}recipes/?format=json`

    const [recipe, setRecipe] = useState('')



    async function fetchRecipes() {
        const response = await fetch(url);
        const recipes = await response.json();
        const recipeInfo = recipes.map((e) => {
            console.log(e)
            return (
                <>
                    {/* the actual recipe card */}
                    <Link href={`/recipedetails/${e.id}/`}>
                        <a>
                            <div style={{
                                width: '250px',
                                maxWidth: '700px',
                                height: '300px',
                                margin: '5px',
                                // background: '#8BC751',
                                // background: '#9E005D',
                                background: 'white',
                                padding: '15px',
                                border: '1px solid #ccc',
                                borderRadius: '2em',
                                borderTop: '2px solid white',
                                borderBottom: '1px solid #8BC751',
                                borderLeft: '15px solid #8BC751',
                                // boxShadow: '5px 5px 8px 1px rgba(0,0,0,0.53)',
                            }}>
                                {/* the details printed on the card */}
                                <div>
                                    <h3 style={{ margin: '0', color: '#333' }}>{e.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#b2b2b2' }}>By: {e.chef_name}</p>
                                    <p style={{ fontWeight: '300', fontSize: '1.1rem' }}>{e.subtitle}</p>
                                    {/* <p>{e.intro}</p>
                        <p>{e.steps}</p>
                        <p>{e.summary}</p> */}
                                </div>
                            </div>
                        </a>
                    </Link>
                </>
                // <><RecipeCard details={e} /></>

            )
        })
        // console.log(recipeInfo)
        console.log(recipeInfo)
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
}


export default Recipes;
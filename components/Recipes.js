import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

const Recipes = () => {

    const url = 'http://localhost:8000/recipies/?format=json'

    const [recipe, setRecipe] = useState('')



    async function fetchRecipes() {
        const response = await fetch(url);
        const recipes = await response.json();
        // console.log(recipes);
        const recipeInfo = recipes.map((e) => {
            console.log(e)
            return (
                <>
                    <div style={{
                        maxWidth: '300px',
                        height: '350px',
                        marginBottom: '20px',
                        background: '#8BC751',
                        padding: '15px',
                        borderRadius: '0px 0px 18px'
                    }}>

                        <div>
                            <h3>{e.title}</h3>
                            <p>By: {e.chef_name}</p>
                            <p>{e.subtitle}</p>
                            {/* <p>{e.intro}</p>
                        <p>{e.steps}</p>
                        <p>{e.summary}</p> */}
                        </div>
                    </div>
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


        <div>
            {recipe}
        </div>
    );
}


export default Recipes;
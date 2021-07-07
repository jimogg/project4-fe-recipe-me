import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FavRecipes = () => {


    const url = 'http://localhost:8000/recipes/?format=json'

    const [recipes, setRecipes] = useState('')



    async function fetchRecipes() {
        const response = await fetch(url);
        const recipes = await response.json();
        const recipeInfo = recipes.map((e) => {
            console.log(e)
            return (
                <>
                    {/* the actual recipe card */}
                    {/* <Link href={`/recipedetails/${e.id}/`}> */}
                    <Link href={`/recipedetails/`}>
                        <a>
                            <div style={{
                            }}>
                                {/* favorited recipe details */}
                                <div>
                                    <p style={{ margin: '0', fontWeight: 'bold', color: '#CE3045', fontSize: '1.1em' }}>{e.title}</p>
                                    <p style={{ margin: '0', fontSize: '0.9rem', color: '#777777' }}>from: {e.chef_name}</p>
                                    <p style={{ fontWeight: '300', fontSize: '13px', marginTop: '5px' }}>{e.subtitle}</p>


                                </div>
                            </div>
                        </a>
                    </Link>
                </>

            )
        })

        setRecipes(recipeInfo)
    }

    useEffect(() => {
        fetchRecipes()
    }, [])

    return (
        <div>
            <h3>My Favorite recipes</h3>
            <>{recipes}</>
        </div>
    );
};

export default FavRecipes;
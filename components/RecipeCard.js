import React from 'react';

const RecipeCard = (details) => {
    return (
        <div style={{ width: '90vw', marginBottom: '15px' }}>

            <p>{details.chef_name}</p>
            <p>{details.title}</p>
            <p>{details.subtitle}</p>
            <p>{details.intro}</p>
            <p>{details.steps}</p>
            <p>{details.summary}</p>
        </div>
    );
};

export default RecipeCard;
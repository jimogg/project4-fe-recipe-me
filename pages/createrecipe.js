import React from 'react';
import CreateRecipeForm from '../components/CreateRecipeForm';
import Nav from '../components/Nav';

const createrecipe = () => {
    return (
        <div>
            <Nav />
            <CreateRecipeForm />
        </div>
    );
};

export default createrecipe;
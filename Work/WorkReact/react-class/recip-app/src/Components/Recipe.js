import React from 'react';

const Recipe = (name, ingredients, step) => {
    return (
        <section id={name.toLowerCase().replace(/ /g, '-')}>
            <h1>{name}</h1>
            <ul className="ingredients">
                {/* {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.name}</li>)
                    
                )} */}
            </ul>
            <section className="instructions">
                <h2>조리 절차</h2>
                {/* {step.map((step, i) =>
                    <p key={i}>{step}</p>
                )} */}
            </section>
        </section>
    );


};

export default Recipe;
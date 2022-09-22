import React from 'react';

const Instructions = ( { title, step }) => {
    return (
        <section className="instructions">
            <h2>{title}</h2>
            {
                steps.map((step, i) => {
                    <p key={i}>{step}</p>
                })
            }
        </section>
    )
}
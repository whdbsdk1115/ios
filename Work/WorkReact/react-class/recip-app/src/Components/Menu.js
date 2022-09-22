import React from 'react';
import Recipe from './Recipe';
import '../Menu.css';

const Menu = (data) => {
    return (
        <article>
            <header>
                <h1>맛있는 조리법</h1> 
                {/* <h1>{props.title}</h1> */}
            </header>
            <div className = "recipes">
                {
                    <Recipe props={data} />
                }
            </div>
        </article>
    )
};
export default Menu
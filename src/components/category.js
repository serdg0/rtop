import React from 'react';
import Subcategories from '../containers/subcategories';

const Category = ({name, subcategories, products}) => {
    return (
        <div>
            <h1>{name}</h1>
            <Subcategories subcategories={subcategories} products={products}/>
        </div>
    )
}

export default Category;
import React from 'react';
import Category from '../components/category';

const Categories = ({ menu }) => {
    const categories = menu.map(category => {
        console.log(category)
        const { subcategories, products, translations: { en: { title } } } = category;
        return <Category name={title} subcategories={subcategories} products={products}/>
    });
    return (
        <div>
            {menu.length === 0 ? 'Loading...' : categories}
        </div>
    )
}

export default Categories;
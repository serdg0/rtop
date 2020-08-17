import React from 'react';
import Category from '../components/category';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';

const Categories = ({ menu }) => {
    const categories = menu.map(category => {
        const { subcategories, products, translations: { en: { title } } } = category;
        return <Category name={title} subcategories={subcategories} products={products}/>;
    });
    return (
        <Row>
            {menu.length === 0 ? 'Loading...' : categories}
        </Row>
    )
}

export default Categories;
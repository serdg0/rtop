import React from 'react';
import Product from '../components/product';
import Subcategory from '../components/subcategory';

const Subcategories = ({subcategories, products}) => {
    const renderProducts = products.map(prod => <Product />)
    const renderSubcategories = subcategories.map(subcat => <Subcategory />)
    const isDessert = () => products.length > 0;
    
    return (
        <div>
            {isDessert() ? renderProducts : renderSubcategories}
        </div>
    )
}

export default Subcategories;
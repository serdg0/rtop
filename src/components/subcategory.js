import React from 'react';
import Product from './product';

const Subcategory = ({ obj }) => {
    const { products, translations: {en: {title: english}, es: {title: spanish}} } = obj;
    console.log(products)

    return (
            <p>{english} ({spanish})</p>
    )
}

export default Subcategory;
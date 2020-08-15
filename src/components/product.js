import React from 'react';

const Product = ({ product }) => {
    const { translations: { en, es } } = product;

    return (
        <div>
            <p>{en.title}</p>
            <p>{es.title}</p>
        </div>
    )
}

export default Product;
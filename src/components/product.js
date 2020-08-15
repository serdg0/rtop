import React from 'react';

const Product = ({ product }) => {
    const { translations: { en, es } } = product;
    const style = {
        marginBottom: "0px"
    }
    return (
        <div>
            <p style={style}>{en.title}</p>
            <p>{es.title}</p>
        </div>
    )
}

export default Product;
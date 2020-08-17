import React from 'react';

const Product = ({ productName }) => {
    const { en, es } = productName;
    const style = {
        marginBottom: "0px"
    }
    return (
        <div>
            <p style={style}>{en}</p>
            <p>{es}</p>
        </div>
    )
}

export default Product;
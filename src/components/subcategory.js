import React, {useState} from 'react';
import Product from './product';

const Subcategory = ({ obj }) => {
    const [displayProducts, setDisplayProducts] = useState(false);
    const { products, translations: {en: {title: english}, es: {title: spanish}} } = obj;
    const handleClick = () => setDisplayProducts(!displayProducts);
    const displayProds = () => products.map(prod => <Product product={prod} />);
    return (
        <div>
            <h4 onClick={handleClick}>{english} ({spanish})</h4>
            <div>{displayProducts && displayProds()}</div>
        </div>
    )
}

export default Subcategory;
import React, {useState} from 'react';
import Product from './product';
import { prodToTitles } from '../helpers/index';

const Subcategory = ({ subcategory }) => {
    const [displayProducts, setDisplayProducts] = useState(false);
    const { products, translations: { en: {title: english }, es: { title: spanish } } } = subcategory;
    const handleClick = () => setDisplayProducts(!displayProducts);
    const displayProds = () => products.map(prod => {
            const titles = prodToTitles(prod);
            return <Product productName={titles} />
        });
    return (
        <div>
            <h4 onClick={handleClick}>{english} ({spanish})</h4>
            <div>{displayProducts && displayProds()}</div>
        </div>
    )
}

export default Subcategory;
import React from 'react';
import Product from '../components/product';
import Subcategory from '../components/subcategory';
import { useSelector } from 'react-redux';
import {displayAction} from '../actions/index';

const Subcategories = () => {
    const display = useSelector(state => state.display);
    const toDisplay = useSelector(state => state[`${display}`]);
    const { products, subcategories } = toDisplay;
    const renderProducts = () => products ? products.map(prod => <Product product={prod} />) : 'loading...';
    const renderSubcategories = () => subcategories ? subcategories.map(subcat => <Subcategory obj={subcat} />) : 'loading...';
    const isDessert = () =>  products ? products.length > 0 : null;
    
    return (
        <div>
            {isDessert() ? renderProducts() : renderSubcategories()}
        </div>
    )
}

export default Subcategories;
import React from 'react';
import Product from '../components/product';
import Subcategory from '../components/subcategory';
import { useSelector } from 'react-redux';
import {displayAction} from '../actions/index';

const Subcategories = () => {
    const display = useSelector(state => state.display);
    const toDisplay = useSelector(state => state[`${display}`]);
    console.log(toDisplay)
    //const renderProducts = products.map(prod => <Product />);
    //const renderSubcategories = subcategories.map(subcat => <Subcategory />);
    //const isDessert = () => products.length > 0;
    
    return (
        <div>
            {/*isDessert() ? renderProducts : renderSubcategories*/}
        </div>
    )
}

export default Subcategories;
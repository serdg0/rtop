import React, { useState, useEffect } from 'react';
import Product from '../components/product';
import Subcategory from '../components/subcategory';
import { useSelector } from 'react-redux';
import {displayAction} from '../actions/index';
import {prodToTitles, mapProdToTitles} from '../helpers/index';

const Subcategories = () => {
    const display = useSelector(state => state.display);
    const toDisplay = useSelector(state => state[`${display}`]);
    const { products, subcategories } = toDisplay;
    const [availableProducts, setAvailableProducts] = useState([]);

    const subCatProds = () => subcategories && subcategories.map(subcat => {
        const { products } = subcat;
        return mapProdToTitles(products);
    });
    const dessertProds = () => products.map(prod => prodToTitles(prod));
    const search = () => {
        return availableProducts.flat().filter(prod => {
            const { en, es } = prod;
            return en.toLowerCase().includes(query) || es.toLowerCase().includes(query);
        });
    };
    const renderProducts = products => products && products.map(prod => <Product productName={prod} />);
    const renderSubcategories = () => subcategories && subcategories.map(subcat => <Subcategory subcategory={subcat} />);
    const isDessert = () =>  products && products.length > 0;
    const isQuery = () => query !== '';

    const [query, setQuery] = useState('');
    const handleQuery = event => {
        const { target: { value } } = event;
        setQuery(value.toLowerCase());
    };

    useEffect(() => {
        isDessert() ? setAvailableProducts(dessertProds()) : setAvailableProducts(subCatProds());
    }, [toDisplay]);

    const toRender = () => {
        if (isQuery()) {
            return renderProducts(search());
        } else if (isDessert()) {
            return renderProducts(products);
        } else {
            return renderSubcategories();
        }
    }

    return (
        <div>
            <input type="text" onChange={handleQuery} />
            {toRender()}
        </div>
    )
}

export default Subcategories;
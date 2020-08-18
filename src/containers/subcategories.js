import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/product';
import Subcategory from '../components/subcategory';
import { prodToTitles, mapProdToTitles } from '../helpers/index';

const Subcategories = () => {
  const display = useSelector(state => state.display);
  const toDisplay = useSelector(state => state[`${display}`]);
  const { products, subcategories } = toDisplay;
  const [query, setQuery] = useState('');
  const [availableProducts, setAvailableProducts] = useState([]);

  const subCatProds = () => subcategories && subcategories.map(subcat => {
    const { products } = subcat;
    return mapProdToTitles(products);
  });
  const dessertProds = () => products.map(prod => prodToTitles(prod));
  const search = () => availableProducts.flat().filter(prod => {
    const { en, es } = prod;
    return en.toLowerCase().includes(query) || es.toLowerCase().includes(query);
  });
  const renderProducts = products => products.map(prod => {
    const { id } = prod;
    return <Product key={id} productName={prod} />;
  });
  const renderSubcategories = subcategories => subcategories.map(subcat => {
    const { id } = subcat;
    return <Subcategory key={id} subcat={subcat} />;
  });
  const isDessert = () => products && products.length > 0;
  const isQuery = () => query !== '';

  const handleQuery = event => {
    const { target: { value } } = event;
    setQuery(value.toLowerCase());
  };
  const memoState = () => (isDessert()
    ? setAvailableProducts(dessertProds())
    : setAvailableProducts(subCatProds()));

  useMemo(() => {
    memoState();
  }, [toDisplay]);

  const toRender = () => {
    if (isQuery()) {
      return renderProducts(search());
    } if (isDessert()) {
      return renderProducts(mapProdToTitles(products));
    }
    return subcategories && renderSubcategories(subcategories);
  };

  return (
    <div>
      <input type="text" onChange={handleQuery} />
      {toRender()}
    </div>
  );
};

export default Subcategories;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Product from './product';
import { prodToTitles } from '../helpers/index';

const Subcategory = ({ subcat }) => {
  const [displayProducts, setDisplayProducts] = useState(false);
  const { products, translations: { en: { title: english }, es: { title: spanish } } } = subcat;
  const handleClick = () => setDisplayProducts(!displayProducts);
  const displayProds = () => products.map(prod => {
    const titles = prodToTitles(prod);
    const { id } = prod;
    return <Product key={id} productName={titles} />;
  });
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {english}
        {' '}
        (
        {spanish}
        )
      </button>
      <div>{displayProducts && displayProds()}</div>
    </div>
  );
};

Subcategory.propTypes = {
  subcat: PropTypes.shape({
    products: PropTypes.instanceOf(Array),
    translations: PropTypes.shape({
      en: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
      es: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default Subcategory;

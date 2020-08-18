import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ productName }) => {
  const { en, es } = productName;
  const style = {
    marginBottom: '0px',
  };
  return (
    <div>
      <p style={style}>{en}</p>
      <p>{es}</p>
    </div>
  );
};

Product.propTypes = {
  productName: PropTypes.shape({
    en: PropTypes.string,
    es: PropTypes.string,
  }).isRequired,
};

export default Product;

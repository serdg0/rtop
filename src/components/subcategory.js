import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Product from './product';
import { prodToTitles } from '../helpers/index';
import { subcatStyle, subcatFontSize, hr } from '../style/index';
import Up from '../logo/up.png';
import Down from '../logo/down.png';

const Subcategory = ({ subcat }) => {
  const [displayProducts, setDisplayProducts] = useState(false);
  const { products, translations: { en: { title: english }, es: { title: spanish } } } = subcat;
  const up = <img src={Up} alt="up" />;
  const down = <img src={Down} alt="down" />;
  const handleClick = () => setDisplayProducts(!displayProducts);
  const displayProds = () => products.map(prod => {
    const titles = prodToTitles(prod);
    const { id } = prod;
    return <Product key={id} productName={titles} />;
  });

  let style = {
    ...subcatFontSize,
  };
  if (displayProducts) {
    style = { ...style, fontWeight: 'bold' };
  }

  return (
    <div className="px-0">
      <button className="row d-flex justify-content-around w-100 ml-0" style={subcatStyle} type="button" onClick={handleClick}>
        <h4 style={style} className="px-0 col text-left">
          {english}
          {' '}
          (
          {spanish}
          )
        </h4>
        <hr className="col-2 col-sm-4 col-lg-6" style={hr} />
        <div className="col-2 px-0">
          {displayProducts ? up : down}
        </div>
      </button>
      {displayProducts && displayProds()}
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

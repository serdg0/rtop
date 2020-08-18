import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Product = ({ productName }) => {
  const { en, es } = productName;
  return (
    <Card className="shadow-sm mb-2">
      <Card.Body className="py-2">
        <span className="font-weight-bolder">{en}</span>
        <br />
        <span className="text-muted font-italic">{es}</span>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  productName: PropTypes.shape({
    en: PropTypes.string,
    es: PropTypes.string,
  }).isRequired,
};

export default Product;

import React from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import Category from '../components/category';

const Categories = ({ menu }) => {
  const categories = menu.map(category => {
    const { id, translations: { en: { title } } } = category;
    return <Category key={id} name={title} />;
  });
  return (
    <Row className="d-flex justify-content-around px-3">
      {menu.length === 0 ? <Spinner animation="border" variant="info" /> : categories}
    </Row>
  );
};

Categories.propTypes = {
  menu: PropTypes.instanceOf(Array).isRequired,
};

export default Categories;

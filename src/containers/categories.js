import React from 'react';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import Category from '../components/category';

const Categories = ({ menu }) => {
  const categories = menu.map(category => {
    const { id, translations: { en: { title } } } = category;
    return <Category key={id} name={title} />;
  });
  return (
    <Row>
      {menu.length === 0 ? 'Loading...' : categories}
    </Row>
  );
};

Categories.propTypes = {
  menu: PropTypes.instanceOf(Array).isRequired,
};

export default Categories;

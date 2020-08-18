import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { displayAction } from '../actions/index';

const Category = ({ name }) => {
  const dispatch = useDispatch();
  const downcase = name.toLowerCase();
  const handleClick = () => dispatch(displayAction(downcase));

  return (
    <Col>
      <button type="button" onClick={handleClick}>{name}</button>
    </Col>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;

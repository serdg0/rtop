import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { displayAction } from '../actions/index';
import {
  categoryButton, menuSize, activeLink, blueBorder,
} from '../style/index';

const Category = ({ name }) => {
  const displayedButton = useSelector(state => state.display);
  const dispatch = useDispatch();
  const downcase = name.toLowerCase();
  const isActive = displayedButton === downcase;
  const handleClick = () => dispatch(displayAction(downcase));

  let colStyle = {
    ...menuSize,
  };

  let buttonStyle = {
    ...categoryButton,
  };

  if (isActive) {
    colStyle = { ...colStyle, ...blueBorder };
    buttonStyle = { ...buttonStyle, ...activeLink };
  }

  return (
    <Col xs={3} style={colStyle} className="d-flex justify-content-center">
      <button style={buttonStyle} type="button" onClick={handleClick}>{name}</button>
    </Col>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Category;

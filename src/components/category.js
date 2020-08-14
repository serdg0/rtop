import React from 'react';
import Subcategories from '../containers/subcategories';
import Col from 'react-bootstrap/Col';
import {displayAction} from '../actions/index';
import { useDispatch } from 'react-redux';

const Category = ({name, subcategories, products }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(displayAction(name.toLowerCase()));
    }

    return (
        <Col>
            <h1 onClick={handleClick}>{name}</h1>
        </Col>
    )
}

export default Category;
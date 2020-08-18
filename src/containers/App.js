import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import {
  populateMixology, populateFood, populateWine, populateDessert,
} from '../actions/index';
import Menu from '../components/menu';
import Categories from './categories';
import Subcategories from './subcategories';

const App = () => {
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://api.adminsite.appsinti.com/menu/product')
      .then(res => {
        const { data } = res;
        dispatch(populateMixology(data[0]));
        dispatch(populateWine(data[1]));
        dispatch(populateFood(data[2]));
        dispatch(populateDessert(data[3]));
        setMenu(data);
      });
  }, [dispatch]);

  return (
    <Container>
      <Menu />
      <Categories menu={menu} />
      <Subcategories />
    </Container>
  );
};

export default App;

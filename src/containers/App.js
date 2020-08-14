import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categories from './categories';

const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('https://api.adminsite.appsinti.com/menu/product')
      .then(res => {
        const { data } = res;
        setMenu(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <Categories menu={menu}/>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Header from '../header/';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
  return (
    <div className='view'>
      <Header />
      <div className='col-md-6'>
        <RandomPlanet />
        <ItemList />
        <PersonDetails />
      </div>

    </div>
  );
};

export default App;
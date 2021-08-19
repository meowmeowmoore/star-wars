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
        <div className='container'>
          <div className='list-container'>
            <ItemList />
          </div>
          <PersonDetails />
        </div>
      </div>

    </div>
  );
};

export default App;
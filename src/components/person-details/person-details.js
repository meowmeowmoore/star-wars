import React from 'react';

import './person-details.css';

const PersonDetails = () => {
  return (
    <div className='person-details card'>
      <div className='person-image'>
        <img className='image'
             src='https://starwars-visualguide.com/assets/img/characters/3.jpg' />
      </div>
      <div className='card-body'>
        <h4>R2-D2</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender</span>
            <span>male</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year</span>
            <span>43</span></li>
          <li className='list-group-item'>
            <span className='term'>Eye color</span>
            <span>red</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// <img className='person-image'
//      src='http://images.fonearena.com/blog/wp-content/uploads/2013/11/Lenovo-p780-camera-sample-10.jpg' />


export default PersonDetails;
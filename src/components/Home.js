/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Telsa from './Tesla';
import '../SCSS/home.scss';

const Home = () => (
  <>
    <div className="heading-container">
      <div>
        <h2>MODELS</h2>
      </div>
      <div>
        <p>PLEASE SELECT A TESLA MODEL</p>
      </div>
    </div>
    <div className="slides">
      <Telsa />
    </div>

  </>
);

export default Home;

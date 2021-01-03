import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Components/landingPage/Landing';
import About from './Components/About/About';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/animate.css';
import './css/animation.css';
import './css/style.css';
import './css/font-awesome.css';
ReactDOM.render(
  <>
    <Landing />
    <Header />
    <About />
  </>,
  document.getElementById('root')
);

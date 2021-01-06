import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Header from './Components/Header';
import Skills from './Components/Skills';
//  <--------css files -------->
import 'bootstrap/dist/css/bootstrap.min.css';
import './andey/js/fancybox/jquery.fancybox.css';
import './css/style.css';
import './css/font-awesome.css';
import './css/animate.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//  <--------css files --------/>
//  <--------js files -------->
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './js/custom.js';

//  <--------js files --------/>
ReactDOM.render(
  <>
    <Landing />
    <Header />
    <About />
    <Skills />
  </>,
  document.getElementById('root')
);

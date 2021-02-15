import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Components/Landing';
import About from './Components/About';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

//  <--------css files -------->
import './css/bootstrap.min.css';
import './js/fancybox/jquery.fancybox.css';
import './css/font-awesome.css';
import './css/animate.css';
import './css/style.css';

//  <--------js files -------->
import 'jquery/dist/jquery.min.js';
import 'bootstrap';
import './js/custom.js';

ReactDOM.render(
  <>
    <Landing />
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>,
  document.getElementById('root')
);

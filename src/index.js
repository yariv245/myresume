import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Components/landingPage/Landing';
import About from './Components/About/About';
import Header from './Components/Header';
// import jQuery from 'jquery';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/animate.css';
import './css/animation.css';
import './css/style.css';
import './css/font-awesome.css';
import 'jquery-easing';
// import 'jquery.fancybox/source/jquery.fancybox.pack.js';
// import './js/jquery.easing.1.3.js';
// import './js/jquery-scrolltofixed.js';    ???
// import './js/fancybox/jquery.fancybox.pack.js';

// import './js/jquery.nav.js';
// import './js/jquery.isotope.js';
// import './js/wow.js';
// import './contact/jqBootstrapValidation.js';
// import './contact/contact_me.js';
// import './js/custom.js';

ReactDOM.render(
  <>
    <Landing />
    <Header />
    <About />
  </>,
  document.getElementById('root')
);

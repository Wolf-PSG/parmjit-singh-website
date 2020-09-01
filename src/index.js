import React from 'react';
import { render } from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';
import { ParallaxProvider } from 'react-scroll-parallax';
import AlertTemplate from './components/alerts/alert.template';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
}; 

const Root = () => (
  <ParallaxProvider>
    <AlertProvider template={AlertTemplate}{...options} >
      <App />
    </AlertProvider>
  </ParallaxProvider>

);

render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

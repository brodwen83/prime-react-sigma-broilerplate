import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './App';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const wrapper = document.getElementById('root');

if (wrapper)
  ReactDOM.render(
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>,
    wrapper,
  );

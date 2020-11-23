import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core';
import theme from './mui-theme';
import './index.css';
import App from './App';

import store from './store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <Router>
                  <App />
              </Router>
          </ThemeProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

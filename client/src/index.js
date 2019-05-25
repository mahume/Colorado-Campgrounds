import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom' //don't need to specify localhost url in axios http address
import dotenv from 'dotenv';
import App from './App';

// style
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';

dotenv.config()

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
    <BrowserRouter>
      <SimpleReactLightbox>      
        <App />
      </SimpleReactLightbox>
    </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();

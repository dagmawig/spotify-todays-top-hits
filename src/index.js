import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateWrap } from './components/StateWrap';
import reducer, { initialState } from './components/Reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateWrap initialState={initialState} reducer={reducer}>
      <App />
    </StateWrap>
  </React.StrictMode>,
  document.getElementById('root')
);


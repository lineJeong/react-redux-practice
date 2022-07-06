import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import App from './App';

const 체중 = 100;

function reducer(state = 체중, action) {
  if(action.type === '증가') {
    state++;
    return state;
  } else if (action.type === '감소') {
    state--;
    return state;
  } else {
  return state;
  }
}

let store = createStore(reducer)

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

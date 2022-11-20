import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store';
import { Provider } from 'react-redux';
import { App } from './App';

const rootElement = document.querySelector('#root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Provider store={store}>
      <App />
    </Provider>)

}

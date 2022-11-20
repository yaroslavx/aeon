import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store';
import { Provider } from 'react-redux';
import { App } from './App';
import { QueryClientProvider, QueryClient } from 'react-query';

const rootElement = document.querySelector('#root')

const queryClient = new QueryClient();

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>)

}

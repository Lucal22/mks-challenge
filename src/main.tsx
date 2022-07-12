import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import mySaga from './data/sagas';
import { Provider } from 'react-redux';
import  cartReducer  from './features/cart';
import productsReducer from './features/get-products';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
reducer: {
  cart: cartReducer,
  products: productsReducer
},
middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),

})
sagaMiddleware.run(mySaga);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

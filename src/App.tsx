import React from 'react';
import Footer from './container/Footer';
import Header from './container/Header';
import Products from './container/Products';
import Global from './styles/Global';

function App() {
  return (
    <>
      <Global />
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default App;

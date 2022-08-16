import React from 'react';
import { Helmet } from 'react-helmet';
import initialState from '../initialState';
import Products from '../components/Products';

const Store = () => {
  return (
    <>
      <Helmet>
      <title>Productos - Tiramuto</title>
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default Store;
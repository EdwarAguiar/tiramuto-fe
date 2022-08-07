import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Store from '../containers/Store';
import Blog from '../containers/Blog';
import Apishow from '../containers/Apishow';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import Notfound from '../containers/Notfound';

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/store' element={ <Store />} />
            <Route path='/blog' element={ <Blog />} />
            <Route path='/apishow' element={ <Apishow />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkout/information' element={<Information />} />
            <Route path='/checkout/payment' element={<Payment />} />
            <Route path='/checkout/success' element={<Success />} />
            <Route path='*' element={<Notfound />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Aboutme from '../containers/Aboutme';
import Store from '../containers/Store';
import Blog from '../containers/Blog';
import Apishow from '../containers/Apishow';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import Notfound from '../containers/Notfound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={ <Home />} />
                        */<Route path='/aboutme' element={ <Aboutme />} />*/
                        <Route path='/store' element={ <Store />} />
                        <Route path='/blog' element={ <Blog />} />
                        <Route path='/apishow' element={ <Apishow />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/checkout/information' element={<Information />} />
                        <Route path='/checkout/payment' element={<Payment />} />
                        <Route path='/checkout/success' element={<Success />} />
                        <Route path='*' element={<Notfound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
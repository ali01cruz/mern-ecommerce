import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

import ProductComponentDetail from '../components/ProductComponentDetail';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => {
    return (
        <Router>
            <HeaderComponent />

            <main className='py-3'> 
                <Container>
                    <Routes>
                        <Route exact path='/' element={<HomePage/>}/>
                        <Route path='/products' element={<ProductPage/>}/>
                        <Route path='/products/:productId' element={<ProductComponentDetail/>}/>
                        <Route exact path='/login' element={<LoginPage/>}/>
                    </Routes>
                </Container>
            </main>

        </Router>
    );
};


export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
//import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { Container } from 'react-bootstrap';

const AppRouter = () => {
    return (
        <Router>
            <HeaderComponent />
            <main className='py-3'>
                <Container>
                    <Routes>
                        {/* <Route  path='/' element={<HomePage/>}/> */}
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/register' element={<RegisterPage/>}/>                                           
                    </Routes>
                    
                </Container>                
            </main>                        
        </Router>
    );
};

export default AppRouter;

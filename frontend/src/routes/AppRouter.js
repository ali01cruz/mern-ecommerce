import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => {
    return (
        <Router>
            <HeaderComponent />
            {/* <LoginPage /> */}
           <RegisterPage />
        </Router>
    );
};


export default AppRouter;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import './bootstrap.min.css';
const AppRouter = () => {
    return (
        <Router>
            <HeaderComponent />
        </Router>
    );
};


export default AppRouter;

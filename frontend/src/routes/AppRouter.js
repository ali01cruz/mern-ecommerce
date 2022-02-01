import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

const AppRouter = () => {
    return (
        <Router>
            <HeaderComponent />
        </Router>
    );
};


export default AppRouter;

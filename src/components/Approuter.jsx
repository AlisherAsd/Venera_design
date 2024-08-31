import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes';
import HomePage from './HomePage/HomePage';

const Approuter = () => {
    
    return (
        <Routes>
            {routes.map(({path, Component}) => 
                <Route key={path} path={path} element={< Component />} exact/>
            )}
             <Route path='*' element={< HomePage />}/>
        </Routes>
    );
};

export default Approuter;
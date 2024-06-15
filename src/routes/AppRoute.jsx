import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/navbar/Navbar'

import Home from '../Pages/home/Home'

const AppRoutes = () => {
    return (
        <div>
                
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='Home' element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/navbar/Navbar'

import Home from '../Pages/home/Home'
import Education from '../Pages/education/Education'
import Project from '../Pages/project/Project'
import Contact from '../Pages/contact/Contact'

const AppRoutes = () => {
    return (
        <div>
                
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='Education' element={<Education></Education>}></Route>
                    <Route path='Project' element={<Project></Project>}></Route>
                    <Route path='Contact' element={<Contact></Contact>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;
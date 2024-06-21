import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/navbar/Navbar';

import Home from '../Pages/home/Home';
import Education from '../Pages/education/Education';
import Project from '../Pages/project/Project';
import Contact from '../Pages/contact/Contact';

const AppRoutes = () => {
    return (
        <div>
            <BrowserRouter basename="/MyPortfolio">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Education" element={<Education />} />
                    <Route path="Project" element={<Project />} />
                    <Route path="Contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;

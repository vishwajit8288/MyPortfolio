import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../navbar/navbar.css'; 

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 mt-3">
                    <nav className="navbar navbar-expand-sm custom-navbar me-5">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className={`nav-item ms-5 ${activeLink === "/" ? "active" : ""}`}>
                                        <Link className="nav-link" to="/"><b>Home</b></Link>
                                    </li>
                                    <li className={`nav-item ms-5 ${activeLink === "/Education" ? "active" : ""}`}>
                                        <Link className="nav-link" to="/Education"><b>Education</b></Link>
                                    </li>
                                    <li className={`nav-item ms-5 ${activeLink === "/Project" ? "active" : ""}`}>
                                        <Link className="nav-link" to="/Project"><b>Projects</b></Link>
                                    </li>
                                    <li className={`nav-item ms-5 ${activeLink === "/Contact" ? "active" : ""}`}>
                                        <Link className="nav-link" to="/Contact"><b>Contact Me</b></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;

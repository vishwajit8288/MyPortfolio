import React from 'react';
import '../../Asset/css/home.css';
import Footer from '../../Components/footer/Footer'
import programmer from '../../Asset/Imges/programmer.svg';
import fullstack from '../../Asset/Imges/fullstack.svg';
import html from '../../Asset/Imges/html.svg';
import css from '../../Asset/Imges/css.svg';
import bootstrap from '../../Asset/Imges/bootstrap.svg';
import javascript from '../../Asset/Imges/javascript.svg';
import react from '../../Asset/Imges/react.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            <div className="container">
                <section>
                    <div className="row" style={{ marginTop: '120px' }}>
                        <div className="col-lg-6 col-md-12 order-2 order-lg-1 mt-3">
                            <h1 className='myname text-start'>VISHWAJIT RATHOD 👋</h1>
                            <p className="p text-start">
                                I'm a frontend developer passionate about creating clean,
                                responsive, and user-friendly interfaces. With hands-on experience
                                in HTML, CSS, JavaScript, Bootstrap, and React.
                            </p>
                            <div className="icon-container">
                                <Link to="https://github.com/vishwajit8288?tab=repositories" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github fa-3x github-icon"></i>
                                </Link>
                                <Link to="https://www.linkedin.com/in/vishwajit-rathod-a82a5a289/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin fa-3x linkedin-icon"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                            <img src={programmer} alt="Programmer" className='img-fluid' />
                        </div>
                    </div>
                </section>

                <section style={{ marginTop: '165px' }}>
                    <div className="row">
                        <p className='description'><b>What I Do?</b></p>
                    </div>
                </section>

                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12">
                        <img src={fullstack} className='img-fluid' alt="Full Stack" />
                    </div>
                    <div className="col-lg-6 col-md-12 work">
                        <p style={{ fontSize: '40px' }}><b>FRONT-END DEVELOPMENT</b></p>

                        <div className="row mt-4">
                            <div className="col-4 col-md-2 img-container" data-name="HTML">
                                <img src={html} alt="HTML" className='img-fluid icon' />
                            </div>
                            <div className="col-4 col-md-2 img-container" data-name="CSS">
                                <img src={css} alt="CSS" className='img-fluid icon' />
                            </div>
                            <div className="col-4 col-md-2 img-container" data-name="JavaScript">
                                <img src={javascript} alt="JavaScript" className='img-fluid icon' />
                            </div>
                            <div className="col-4 col-md-2 img-container" data-name="Bootstrap">
                                <img src={bootstrap} alt="Bootstrap" className='img-fluid icon' />
                            </div>
                            <div className="col-4 col-md-2 img-container" data-name="React">
                                <img src={react} alt="React" className='img-fluid icon' />
                            </div>
                        </div>

                        <div className="row mt-3 text-start p">
                            <p>⚡ Building responsive websites using HTML, CSS, JavaScript</p>
                            <p>⚡ Developing interactive user interfaces with React.js</p>
                            <p>⚡ Creating visually appealing designs with Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="row text-end">
                    <div className="col-12">
                        <div id="topButton" title="Go up" onClick={scrollToTop}>
                            <i className="fa fa-arrow-up" id="arrow"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;

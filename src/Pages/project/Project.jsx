import React from 'react';
import projectsimage from '../../Asset/Imges/projectsimage.svg';
import CommonBtn from '../../Components/common/CommonBtn';
import Footer from '../../Components/footer/Footer';
import '../../Asset/css/project.css';

const Project = () => {
    return (
        <div className="container-fluid project-container">
            <section className="project-section" style={{ minHeight: '100vh' }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <img src={projectsimage} className="img-fluid project-image" alt="Projects" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="project-content">
                            <h1 className="mb-4">Projects</h1>
                            <p className="text-start text-muted" style={{ fontSize: "20px", fontWeight: '600' }}>
                                Discover my portfolio highlighting projects where I've utilized front-end technologies like HTML, CSS, JavaScript, Bootstrap, and React.
                                Each project demonstrates my expertise in creating responsive, interactive web applications with a focus on user-centric design and seamless functionality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section" style={{ minHeight: '100vh' }}>
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2 className="section-title">Created Projects</h2>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <a href='https://github.com/vishwajit8288/Tickets' target='_blank' rel="noopener noreferrer" className="text-decoration-none">
                                    <h3 className='card-title text-start'>Ticket Tool</h3>
                                </a>
                                <p className='card-text text-start'>
                                    Designed user-friendly interfaces for employees to report issues and
                                    for administrators to manage tickets.
                                </p>
                                <p className='card-text text-muted text-start'>Created on 3/2/2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <a href='https://github.com/vishwajit8288/MiniProjectIdea' target='_blank' rel="noopener noreferrer" className="text-decoration-none">
                                    <h3 className='card-title text-start'>Mini ProjectIdeas</h3>
                                </a>
                                <p className='card-text text-start'>
                                    This platform allows users to explore a variety of projects to spark creativity and discover new ideas for personal or professional endeavors.
                                </p>
                                <p className='card-text text-muted text-start'>Created on 7/2/2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <a href='https://github.com/vishwajit8288/EventOrganizer' target='_blank' rel="noopener noreferrer" className="text-decoration-none">
                                    <h3 className='card-title text-start'>Event Planner</h3>
                                </a>
                                <p className='card-text text-start'>
                                    An application to efficiently organize events, manage guest lists, and coordinate schedules, ensuring seamless event execution.
                                </p>
                                <p className='card-text text-muted text-start'>Created on 7/1/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CommonBtn />
            <Footer />
        </div>
    );
};

export default Project;

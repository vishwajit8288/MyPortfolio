import React from 'react';
import Logo from '../../Asset/Imges/Logo.webp';
import education from '../../Asset/Imges/education.svg';
import codefirstlogo from '../../Asset/Imges/codefirstlogo.svg';
import sgbau from '../../Asset/Imges/sgbau.png';
import '../../Asset/css/education.css'; // Import your custom CSS
import CommonBtn from '../../Components/common/CommonBtn';
import Footer from '../../Components/footer/Footer';
import { Link } from 'react-router-dom';

const Education = () => {
    const goTosite = () => {
        window.open('https://dypsomca.com/', '_blank');
    };

    const goTodegreeSite = ()=>{
        window.open('https://yavatmal.gov.in/public-utility/rupesh-kumar-ingole-college-of-management-technology/','_blank')
    }
    return (
        <div className="container" style={{ minHeight: '100vh' }}>
            <section className="row align-items-center mt-5">
                <div className="col-12 text-center">
                    <h1><b>Education</b></h1>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src={education} alt="Education" className='img-fluid' />
                </div>
                <div className="col-lg-6 col-md-12 mt-5 text-center">
                    <h3>Basic Qualification and Certifications</h3>
                    <h3>Front-End Development</h3>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Link to='https://codefirstacademy.com/' target='_blank'> <img src={codefirstlogo} alt=""  className='img-fluid' /></Link>
                            <p>Academy</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="row mt-5">
                <div className="col-12 mb-4"><h1><b>Degrees Received</b></h1></div>
                <div className="col-md-4 col-sm-12">
                    <img src={Logo} alt="Logo" className='img-fluid fixed-size-image' />
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="card">
                        <div className="card-header p-2" style={{ backgroundColor: '#85B7D5' }}>
                            <div className="row">
                                <div className="col-6 text-start clg-name">D.Y.Patil School of MCA</div>
                                <div className="col-6 text-end clg-name">2021-2023</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card-body-content text-start">
                                <p>⚡Advanced programming languages (Java, Python, etc.) and frameworks.</p>
                                <p>⚡Advanced software engineering principles and methodologies.</p>
                                <p>⚡System analysis and design, database management systems, and project management.</p>
                            </div>
                            <div className="text-end">
                                <button className='btn btn-danger' onClick={goTosite}>Visit Website</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="row align-items-center mt-5">
                <div className="col-md-4 col-sm-12">
                    <img src={sgbau} alt="Logo" className='img-fluid fixed-size-image' />
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="card">
                        <div className="card-header p-2" style={{ backgroundColor: '#85B7D5' }}>
                            <div className="row">
                                <div className="col-8 text-start clg-name">Sant Gadge Baba Amravati University</div>
                                <div className="col-4 text-end clg-name">2018-2021</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card-body-content text-start">
                                <p>⚡ I have studied Programming languages (C, C++, Java), database management systems, and software development methodologies etc.</p>
                                <p>⚡ Web technologies, networking, and cybersecurity.</p>
                                <p>⚡ Practical labs and projects to apply theoretical concepts to real-world problems.</p>
                            </div>
                            <div className="text-end">
                                <button className='btn btn-danger' onClick={goTodegreeSite}>Visit Website</button>
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

export default Education;

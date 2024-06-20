import React from 'react';
import Icons from '../../Components/common/Icons';
import itsme from '../../Asset/Imges/itsme.png';
import addressimage from '../../Asset/Imges/addressimage.svg';
import Footer from '../../Components/footer/Footer';
import CommonBtn from '../../Components/common/CommonBtn';
import { hover } from '@testing-library/user-event/dist/hover';


const Contact = () => {
    const seeResume = () => {
        window.open('https://drive.google.com/file/d/1tglQXcy0qMsAkVJbcRIioQSJRmwBAlmX/view?usp=drive_link', '_blank');
    };
    const seeLocation = ()=>{
        window.open('https://www.google.com/maps/place/Lohegaon,+Pune,+Maharashtra/@18.5920043,73.8847831,13z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c6a3663ec599:0x43c3767a3fdbae96!8m2!3d18.5944704!4d73.9275889!16s%2Fg%2F11c53d2j9f?entry=ttu', '_blank');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img src={itsme} alt="My Picture" className="img-fluid" />
                </div>
                <div className="col-md-7">
                    <section className="mt-5">
                        <div className="mb-4">
                            <h1>CONTACT ME</h1>
                        </div>
                        <p className="text-start" style={{ fontWeight: '600' }}>
                            I am available on almost every social media. You can message me, I will reply within 24 hours.
                        </p>

                        <div className="row">
                            <div className="justify-content-start d-flex">
                                <Icons />
                            </div>

                            <div className="col-12 mt-2 text-start">
                                <button className="btn text-white w-50 resumebtn" style={{ backgroundColor: 'crimson'}} onClick={seeResume}>
                                    SEE MY RESUME
                                </button>
                            </div>
                        </div>

                    </section>
                </div>
            </div >

            <div className="row mt-3">
                <div className="col-12">
                    <h1>ADDRESS</h1>
                </div>
                <div className='d-flex align-items-center'>
                    <div className="col-7">
                        <img src={addressimage} alt="" className='img-fluid' />

                    </div>
                    <div className="col-5">
                        <p className='text-muted' style={{fontSize:'30px'}}>
                            Pune,411014
                        </p>
                        <button className='btn text-white w-50' onClick={seeLocation} style={{backgroundColor:'#001C55'}}>Visit On Google Map</button>
                    </div>
                </div>

            </div>

            <CommonBtn />
            <Footer />

        </div >
    );
};

export default Contact;

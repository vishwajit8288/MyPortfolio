import React from 'react';
import '../../Asset/css/common.css'
const CommonBtn = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div>
             <div className="row text-end">
                    <div className="col-12">
                        <div id="topButton" title="Go up" onClick={scrollToTop}>
                            <i className="fa fa-arrow-up" id="arrow"></i>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CommonBtn;
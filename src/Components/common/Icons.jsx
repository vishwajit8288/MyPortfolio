import React from 'react';
import '../../Asset/css/icons.css'
import { Link } from 'react-router-dom';
const Icons = () => {
    return (
        <div>
            <div className="icon-container">
                <Link to="https://github.com/vishwajit8288?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github fa-3x github-icon"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/vishwajit-rathod-a82a5a289/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin fa-3x linkedin-icon"></i>
                </Link>
                <Link to="" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram fa-3x instagram-icon"></i>
                </Link>
                <Link to="" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook fa-3x facebook-icon"></i>
                </Link>

            </div>
        </div>
    );
};

export default Icons;
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/jobs"><h1>App</h1></Link>
            <ul>
                <li>
                    <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                    <Link to="/applied-jobs">Applied Jobs</Link>
                </li>
                <li>
                    <Link to="/job-register">Register Jobs</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <button
                        onClick={() => {
                            localStorage.removeItem('userId');
                            window.location.href = '/';
                        }}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
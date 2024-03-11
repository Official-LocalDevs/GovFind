import React, {useEffect, useState}from 'react';


const Navbar = () => {
    return (
        <nav>
            <img src="../client/public/govFindLogo.png" alt="GovFind Logo" />

            <ul>
                <li className="navLinks">
                    <a href="">
                        <button>Home</button>
                    </a>
                </li>
                <li className="navLinks">
                    <a href="">
                        <button>About</button>
                    </a>
                </li>
                <li className="navLinks">
                    <a href="">
                        <button>Programs</button>
                    </a>
                </li>
            </ul>

            <a href="">
                <button>Log In</button>
            </a>
            <a href="">
                <button>Register</button>
            </a>
        </nav>
    );
};

export default Navbar;

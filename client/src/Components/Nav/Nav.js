import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import './nav.scss';

function Nav() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)



    return (
        <nav className="d-flex">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <div className={click ? "navMenu active" : "navMenu"}>
                            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                            <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                    </div>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <AiOutlineClose className="menu-icon" />
                        ) : (
                            <FaBars className="menu-icon" />
                        )}
                    </div>
                   
                </div>
            </div>
        
           
        </nav>
    )
}

export default Nav;



import React, { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className='navbar'>
             <div className='nav-container'>
                <NavLink to={'/'} className="nav-logo">
                    <span>Венера</span>
                </NavLink>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  

                     <li className="nav-item">
                        <NavLink to={'/'} 
                            
                            className="nav-links"
                            onClick={handleClick}
                        >Главная /</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/portfolio'} 
                            
                            className="nav-links"
                            onClick={handleClick}
                        >Портфолио /</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/contacts'} 
                            
                            className="nav-links"
                            onClick={handleClick}
                        >Контакты    /</NavLink>
                    </li>
                 
                </ul>

                <div className="nav-icon" onClick={handleClick}>
                    {click ? (
                    <span className="icon">
                        MENU
                    </span>
                    ) : (
                    <span className="icon">
                        MENU
                    </span>
                    )}
                </div>
             </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import '../styles/Navbar.scss'

function Navbar({routeChange}) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <h3>Jobs Search</h3>
        
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    
        <div id="navbarBasicExample" className="navbar-menu">

        
            <div className="navbar-end">
                <a href="#home" className="navbar-item">
                    Home
                </a>
                <a href="#search" className="navbar-item">
                    Search
                </a>
                <a href="about" className="navbar-item">
                    About Me
                </a>
                <div className="navbar-item">
                    <div className="buttons">
                        <a onClick={() => routeChange()} className="button is-light">
                            Log out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
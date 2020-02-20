import React from 'react'

import { Link } from 'react-router-dom'



function NavBar() {
    return(
        
        <nav>
            <div className="nav-wrapper light-blue darken-4">
                <a href="#" className="brand-logo right">
                    Logo
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/directory">Directorio</Link></li>
                </ul>
            </div>
        </nav>
    );
}


export default NavBar
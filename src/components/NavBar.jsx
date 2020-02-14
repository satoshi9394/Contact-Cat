import React from 'react'



function NavBar() {
    return(
        
        <nav>
            <div className="nav-wrapper light-blue darken-4">
                <a href="#" className="brand-logo right">
                    Logo
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Acerca de Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}


export default NavBar
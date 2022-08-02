import logo from './LogoGJ-small-1.png';
import './colorgradients.css';
import { Outlet, NavLink, Link } from 'react-router-dom';



function Navbar() {
  return (
    <>
    <header className="header_area fixed-top container-fluid " >        
        <div className="header_navbar ">
            <div className="container-fluid theme-color">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo} alt="Logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                                <ul id="nav" className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link className="page-scroll nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll nav-link" href="#about">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className=" page-scroll nav-link" href="#services" >Services</a>
                                            
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll nav-link" href="#case">Achievements</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll nav-link" href="#growth">Contact</a>
                                    </li>
                                   
                                </ul>
                            </div> 
                          
                            
                        </nav> 
                    </div>
                </div> 
            </div> 
        </div>
         </header>

        <Outlet />
        </>
      
  );
}

export default Navbar;

import companyLogo from './LogoGJ-small-1.png';
import React from "react";
import styles from './fonts.module.css';
import back from './Slider/dots.png';
import './colorgradients.css';
function Footer(){

    return (
<React.Fragment>

<section id="footer" className="footer_area"  >
        <div className={`${styles.ubuntu} p-3`}>
            <div className="footer_wrapper p-3 gradColor">
                <div className="row">
                    <div className="col-lg-3 col-md-6 order-md-1 order-lg-1">
                        <div className="footer_about mt-50">
                            <a href="#">
                                <img src={companyLogo} alt="George & Jerry Co LTD" />
                            </a>
                            <p>At G & J we engage in Building projects,
                                 road construction and maintenance, electrical works, water works, supply of aggregates,
                                  construction of bridges, civil engineering works and many others activities.</p>
                            <ul className="social">
                                <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href="#"><i className="lni lni-instagram-original"></i></a></li>
                                <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                            </ul>
                        </div> 
                    </div>
                    <div className="col-lg-5 col-md-12 order-md-3 order-lg-2 ">
                        <div className="footer_link_wrapper d-flex ">
                            <div className="mt-45 ">
                                <h4 className="footer_title">Contact Us</h4>
                                <ul className="link  ">
                                    <li className="mt-3" ><i className="bi bi-geo-alt-fill blueColor" ></i>&nbsp; Chief Street Bomaka,Buea Cameroon</li>
                                    <li className="mt-3"><i className="bi bi-telephone-fill blueColor"></i>&nbsp; (+237) 233324104 / (+237) 699849853</li>
                                    <li className="mt-3"><i className="bi bi-envelope-fill blueColor"></i>&nbsp;  contact@georgeandjerrycm.com</li>
                                    <li className="mt-3"> <i className="bi bi-clock-fill blueColor"></i> &nbsp;  Mon -Fri:8:00 - 12:30 & 1:30 - 5:30
Sat: 8:00 - 1:00</li>
                                </ul>
                            </div> 
                            
                        </div> 
                    </div>
                    <div className="col-lg-4 col-md-12 order-md-3 order-lg-2">
                        <div className="footer_link_wrapper d-flex ">
                            <div className="footer_link mt-45">
                                <h4 className="footer_title">Useful Links</h4>
                                <ul className="link">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Case Study</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div> 
                            
                        </div> 
                    </div>
                    
                </div> '
                <div className={` container-fluid d-flex justify-content-center ${styles.arima}`} >
            Designed and Developed By George & Jerry IT Dept
            </div>'
            </div>
              
        </div>
         
    </section>

</React.Fragment>

    );
}

export default Footer;
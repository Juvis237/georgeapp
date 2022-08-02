import React from "react";

export function Abouttxt(props){
    return(
        <React.Fragment>
                <div className="col-lg-5">
                    <div className="about_content mt-45">
                        <div className="section_title">
                            <h4 className="sub_title">About Us</h4>
                            <h3 className="title">{props.contentTitle}</h3>
                        </div> 
                        <p>
                            {props.contentTxt}
                        </p>
                      
                    </div>
                </div>
        </React.Fragment>

    );
}

export function ImageAbout(props){
    return(
        
        <React.Fragment>
        
              <div className="col-lg-7">
                    <div className="about_image mt-50">
                        <img src={props.sample} alt="about image" />
                        <div className="experiance d-flex justify-content-center align-items-center text-center wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="experiance_wrapper text-center">
                                <span>+{props.noy}</span>
                                <p>Years of Experiance</p>
                            </div>
                        </div>
                        <div className="about_shape">
                            <img src={props.sample2} alt="shape" />
                        </div> 
                    </div> 
                </div>
        </React.Fragment>
    );
}


import React from "react";
import { Link, NavLink} from "react-router-dom";

export default function ServiceBox(props){

    return(
        <React.Fragment>
        <div className="col-lg-4 col-sm-6">
                    <div className="single_services text-center mt-30 wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="services_icon">
                            <i className="lni lni-user"></i>
                        </div>
                        <div className="services_content">
                            <h4 className="services_title"><a href="#" style={{textDecoration:"none"}}>{props.title}</a></h4>
                            <p>{props.description}</p>
                        </div>
                        <center>
                            
                        <NavLink to={`serviceDescription/${props.uid}`}><button className="btn btn-primary title display-2 btn-lg">
                                Learn More
                            </button>
                            </NavLink>
                        </center>
                    </div> 
                </div> 
                </React.Fragment>

    );
}
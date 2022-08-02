import React from "react";

function Reason(props){
return( 
    <React.Fragment>
        <div className="col-lg-3 col-sm-6">
                    <div className="single_features text-center mt-25 wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="features_icon">
                            <i className={props.iconName}></i>
                        </div>
                        <div className="features_content">
                            <h4 className="features_title"><a href="#" style={{textDecoration:"none"}}> {props.mainTxt} </a></h4>
                            <p>{props.description}</p>
                        </div>
                    </div> 
                </div>
    </React.Fragment>
    );
}

export default Reason;
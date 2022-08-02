import React from "react";
import Reason from "./reason";
import { Outlet } from 'react-router-dom';

let featuresTxt = [

    ["Honest & Dependable", " Trustworthy, honest and integrity are a few words which come to mind when thinking about us. There a core value and a way of life. We do our jobs not because we are payed to but rather because we love to."],
    ["Quality & Commitment", " We have our very own quality assurance checklist that ensures no details are missed when completing any of our projects." ],
    ["Creative & Experimented","We have always worked to develop advanced techniques, strategies and innovative methods. We have 20 years of experience of many types of construction."],
    ["Fast Delivery","We use modern scheduling technology that details your entire project and ensures it is completed on-time and on-budget. It's a priority for us."], 
    ["Certified", "Our company has gained Government trust in our country and an impeccable reputation with companies like Denys Construction, SPIECAPAG."]


];

function Why(){
    return(
        <React.Fragment>
            <section id="why" className="features_area pt-100 pb-100 blue-bg">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section_title text-center pb-10">
                            <h4 className="sub_title">Why Choose Us?</h4>
                            <h3 className="title">Here are some reasons why you can do business with Us?</h3>
                        </div> 
                    </div>
                    </div>
                    <div className="row">
                        { featuresTxt.map( (elmt) => <Reason key={featuresTxt.indexOf(elmt)} iconName="lni lni-heart" mainTxt={elmt[0]} description={elmt[1]}/>)}
                    </div>

                </div>
            </section>
            <Outlet />
        </React.Fragment>

    );
}

export default Why;
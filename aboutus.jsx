import React from "react";
import { Abouttxt, ImageAbout } from "./about";
import { Outlet } from 'react-router-dom';
import SampleImage from "./Slider/gas.jpg";
import SwiftImage from "./shape-1.svg";

let [title, content, NOY] = [
    "George & Jerry CO. LTD is Trusted by 400+ Businesses Worldwide.",
    "GEORGE AND JERRY CONSTRUCTION COMPANY LIMITED hereinafter called G&J Co.Ltd was created in February 2004 with its registered head office in Buea, South West Region of Cameroon. We are involved in Building projects, road construction and road maintainance, supply of aggregates, civil engineering works and related activities of all sorts such as rehabilitation of buildings, bridges, roads throughout the world. We are a team that is extremely knowledgeable, with about 20 years experience in the construction industry and building trends. With well trained, flexible and experienced personnel who are devoted in contributing their expertise and resources for a better global society, the company has gained Government trust and an impeccable reputation with companies like; SOGEA-SATOM, RAZEL CAMEROUN, SPIECAPAG SUCCURSALE CAMEROUN, DENYS CONSTRUCTION, WARTSILA CENTRAL AFRICA …",
    18
];

function Aboutus(){

    return(
        <React.Fragment>
            <section id="about" className="about_area pt-50">
                <div className="container">
                     <div className="row align-items-center">
                        <ImageAbout sample={SampleImage} noy={NOY}  sample2={SwiftImage} />
                        <Abouttxt contentTitle={title} contentTxt={content}  />
        
                    </div>
                </div>
            </section>
            <Outlet />
        </React.Fragment>

    );


}

export default Aboutus;
import React from "react";
import { Outlet } from 'react-router-dom';
import ServiceBox from "./servicebox.jsx";
let serviceTxt = [
    [1,"Public Works","Infrastructural development is one of the major challenges faced by our developing nation. Working in close collaboration with the Ministry of Public Works, a renowned subcontractor for international companies …"],
    [2,"Buildings","In partnership with the Ministry of Public Contracts, local councils, international organizations, and local NGOs, we have realized several building structures ranging from schools, markets, hospitals, offices …"],
    [3,"Electrical Works","We are amongst Cameroon's leading companies in the sector of electrification. In partnership with ENEO Cameroon and the Ministry Of Water Resources and Energy, we have successfully brought happiness to …"],
    [4,"Water Works","Understanding the importance of water in our lives, we have accomplished a great number of projects aimed to provide local communities with portable water in partnership with Camwater, WHO, Local …"],
    [5,"Telecommunication","Being a subcontractor of Cameroon$'s leading telecommunication company (CAMTEL), we gain experience in the domain of displacement and installation of telecom networks, construction of communication…"],
    [6,"Hiringof Equipments and Supply of Materials","Being one of Cameroon's strongholds in the construction sector, we possess a wide range of construction equipment and aggregates to meet the needs of other construction…"],
    
];

function Services(){
        return(
            <React.Fragment>
            <section id="services" className="services_area pt-95 blue-bg">
                <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-8">
                    <div className="section_title text-center pb-15">
                    
                        <h3 className="title" style={{color:"#0898E7"}}>We Offer Best Construction Services in the following Sectors:</h3>
                    </div> 
                    </div>

                    <div className="row">
                       {serviceTxt.map((elmt) => <ServiceBox key={serviceTxt.indexOf(elmt)} title={elmt[1]} description={elmt[2]} uid={serviceTxt.indexOf(elmt) + 1} />)}

                    </div>
                
                        </div>
                </div>
            </section>
            <Outlet />
            </React.Fragment>

        );
}

export default Services;
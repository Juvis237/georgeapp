import React from "react";
import Navbar from './Nav';
import { Outlet} from 'react-router-dom';
import styles from "./fonts.module.css";
import './colorgradients.css';
import Image2 from "./Slider/resevoir.jpeg";
import Image3 from "./Slider/service.jfif";
import Card from "./card";
import wave from "./Slider/wave2.svg";








function Description(props){
    console.log(props);
    return (
       

        <React.Fragment>
            
           
                <div className="container-fluid position-relative" >
                    <img src={Image3} className="d-block w-75 mx-auto rounded"  height="450" alt="slide 1" />
                    <div className="w-50 position-absolute top-50 start-50 translate-middle card opacity-75" >
                        <div className={`d-block display-3 mx-auto ${styles.lobster}`} >
                             {props.headerText}
                        </div>
                        
                    </div>
                    
                </div>
       
            <Outlet />
        </React.Fragment>
    );

}

export function DescriptiveText(){

    return(
        <>
     
        <section id="desc">
           
           <div className={`gradColor container-fluid row p-5 ${styles.arima}`}  style={{height: '600px'}}>
           <h2 className="d-flex justify-content-center  display-2">
                Killer Header Text
            </h2>
                        <div className="col-lg-7 ">
                            <img src={Image2} alt="image" className="w-100 card" />
                        </div>
                        <div className="col-lg-5 p-2  d-block">
                           
                            <div>
                            asdfghjkl;    
                            </div>
                            
                            <button className="btn btn-primary">
                                Contact Us 
                            </button>
                            
                        </div>
            </div>
            <div className="container-fluid   p-2 ">
                <h2 className="d-flex justify-content-center">
                    See some of our results...
                </h2>
                <div className="container-fluid row">
                    { 
                   <>
                    <Card imgURL={Image2} title='Public Works at General  Hospital' />
                    </>
                
                    }
                </div>
            </div>
        </section>
        </>



    );
}




export default  Description;


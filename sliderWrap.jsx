import React from "react";
import Slider from "./slider";
import Image1 from "./Slider/gas.jpg";
import Image2 from "./Slider/resevoir.jpeg";
import Image3 from "./Slider/road.jpg";
import { Outlet } from 'react-router-dom';
function Sliderwrap(){

    return (
        <React.Fragment>

<div id="carouselExampleInterval" className="carousel slide rounded p-2" data-bs-ride="carousel">
      <div className="carousel-inner rounded">
        
      <Slider image={Image1} smallTxt="hey" bigTxt="werghgfds" activate="" interval="10000"/>
      <Slider image={Image2} smallTxt="hey" bigTxt="werghgfds" activate="" interval="3000"/>
      <Slider image={Image3} smallTxt="hey" bigTxt="werghgfds" activate="active" interval="0"/>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
            
    <Outlet />
        </React.Fragment>

    );

   
}
export default Sliderwrap;
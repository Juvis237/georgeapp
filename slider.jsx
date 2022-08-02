import React from "react";


function Slider(props){
    return(
        <React.Fragment>
           
          
            <div className={activated(props.activate)} data-bs-interval={setInterval(props.interval)}>
                <img src={props.image} className="d-block w-100"  height="600" alt="slide 1" />
                <div className=" d-none d-sm-block w-50 h-25 position-absolute top-50 start-0 p-2 mr-1" >
                    <p className="display-1 fw-bolder">{props.bigTxt} </p>
                    <p className="fs-3 fw-bold">{props.smallTxt}</p>
                    <button className="btn btn-primary display-2 btn-lg">Text</button>
                </div>
            </div>
            
        </React.Fragment>
    );
}


function activated( value ){
    let classes = "carousel-item rounded position-relative";
     
   return value == "active" ? classes+=" active" : classes; 
    
   
}

function setInterval( v ){
    return v != 0 ? v : null;
}



export default Slider;
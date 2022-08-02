import React from "react";


export function Card({imgURL, title}){

    return(
        <div className="col-lg-4 p-4">
        <div className="card ">
            <img className="card-img-top" src={imgURL} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title"><center> {title} </center></h4>
            </div>
            </div>
            </div>
    );
}


export default Card;
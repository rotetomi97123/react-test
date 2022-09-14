import React from "react";

export default function Cards(props){
    return(
        <div className="box">
            <div className="box-text">
                <span>
                    <img className="cover-img"src={props.item.img}></img>
                </span>
                <span className="location">
                    <span>
                        <img className="loc-logo"src={props.item.locationLogo}></img>
                    </span>
                    <span>
                        <p className="location-text">{props.item.location}</p>
                    </span>
                </span>
                <span className="cover-title">
                    <p>{props.item.title}</p>
                </span>
            </div>
           
        </div>
    )
}
//location
//googleMapsLink
//startdate
//enddate
//description
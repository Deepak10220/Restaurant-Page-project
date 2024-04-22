import React from 'react';
import './Restaurant.css';
import { FaStar } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

const Restaurant = (props) => {
    const {name, address, addressLineTwo, foodType, rating, url} = props;
  return (
    <div className='card-container'>
            <div className='padding'>
                <h3>{name}</h3>
                <p>Rating : {rating} <FaStar style={{
                    color:"#fad25a"
                }}/></p>
            </div>
            <div className='padding'>
                <p><FaLocationDot /> {address}</p>
                <p>{addressLineTwo}</p>
            </div>
            <div className='food-url padding'>
                <div>
                    <p ><PiForkKnifeFill /> {foodType}</p>
                </div>
                <a href={url}>Visit menu</a>
            </div>
        </div>
  )
}

export default Restaurant
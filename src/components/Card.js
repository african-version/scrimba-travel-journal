import React from 'react';
import { MdLocationOn } from "react-icons/md";

export default function Card(props) {
  return (
    <div className='card'>
        <img className='card--img' src={`../images/${props.coverImg}`} alt="Mount Fuji" />
        <div className='card--details'>
            <div className='card--top--row'>
                <span className='location'><MdLocationOn className='location-icon'/>{props.location}</span>
                <span className='google--map'><a href=''>View on Google Maps</a></span>
            </div>
            <span className='title'>{props.title}</span> <br />
            <span className='date'>{props.startDate} - {props.endDate}</span> <br />
            <span className='description'>{props.description}</span>
        </div>
    </div>
  )
}
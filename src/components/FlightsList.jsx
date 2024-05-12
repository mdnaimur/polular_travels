import "../styles/table.css";

import React from 'react';
import { useGlobalContext } from "../context";
import Loading from "./Loading";

export default function FlightList(){
    const {loading,traveldata} = useGlobalContext()
    if(!traveldata){
       return( <Loading />)
    }
    if(traveldata.lenght < 1){
        return(
            <h2> NO Data Found!! </h2>
        )
    }
    
return(
    <>
     <table>
      <thead>
        <tr>
          <th>Flight</th>
          <th>Aircraft</th>
          <th>Class</th>
          <th>Fare</th>
          <th>Route</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Duration</th>
          <th></th>
          <th>Price</th>
        </tr>
      </thead>
   <tbody>
  {traveldata.map((flight, index) => {
    const { segments, standard, fare, duration, price, seat } = flight;

    return (
      <tr key={index}>
        <td>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>
              {segment.carrier} {segment.aircraft} <br />
            </span>
          ))}
        </td>
        <td>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>{segment.flightNumber}</span>
          ))}
        </td>
        <td> {standard}</td>
        <td> {fare}</td>
        <td>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>
              {segment.departure} - {segment.arrival}
            </span>
          ))}
        </td>
        <td>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>
               {segment.departure} - {segment.arrival}
            </span>
          ))}
        </td>
        <td>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>{segment.arrivalTime}</span>
          ))}
        </td>
      
        <td>{duration}</td>
        <td>---</td>
        <td>
          {price} <br /> <button type="submit" value="">SELECT</button>
        </td>
      </tr>
    );
  })}
</tbody>
    </table>
    
    </>
)
}
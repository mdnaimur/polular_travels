// import "../styles/table.css";

import React from 'react';
import { useGlobalContext } from "../context";
import Loading from "./Loading";

export default function FlightList(){
    const {loading,traveldata} = useGlobalContext()
    if(!traveldata){
       return( <Loading />)
    }
    if(traveldata.length  < 1){
        return(
            <h2 className='font-bold container text-lg bg-red-500 mx-auto text-yellow-100 flex justify-center'> No Data Found!! </h2>
        )
    }
    
return(
    <>
      <div className='container mx-auto flex justify-start'> <h3 className='text-base font-semibold px-4 py-2 mb-4 mx-24 xl:mx-56'>Data parsed successfully</h3> </div>
    <div className='container mx-auto flex justify-center items-center 2xl:mx-auto '>
     <table className="table-auto bg-gray-100 border border-gray-300 shadow-md rounded-lg p-5 ">
      <thead className="bg-gray-200">
        <tr>
          <th className='px-4 py-2'>Flight</th>
          <th className='px-4 py-2'>Aircraft</th>
          <th className='px-4 py-2'>Class</th>
          <th className='px-4 py-2'>Fare</th>
          <th className='px-4 py-2'>Route</th>
          <th className='px-4 py-2'>Departure</th>
          <th className='px-4 py-2'>Arrival</th>
          <th className='px-4 py-2'>Duration</th>
          <th className='px-4 py-2'></th>
          <th className='px-4 py-2'>Price</th>
        </tr>
      </thead>
   <tbody>
  {traveldata.map((flight, index) => {
    const { segments, standard, fare, duration, price, seat } = flight;

    return (
      <tr className="border-b border-orange-400 border-solid shadow-md" key={index}>
        <td className='px-4 py-2 text-center'>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>
              {segment.carrier} {segment.aircraft} <br />
            </span>
          ))}
        </td>
        <td className='px-4 py-2 text-center'>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>{segment.flightNumber} <br /> </span> 
          ))}
        </td>
        <td className='px-4 py-2 text-center'> {standard} <br /> {standard} </td>
        <td> {fare}</td>
        <td className='px-4 py-2 text-center'>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>
              {segment.departure} - {segment.arrival} <br />
            </span>
          ))}
        </td>
        <td className='px-4 py-2 text-center'>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>
               {segment.departureTime} <br /> 
            </span>
          ))}
        </td >
        <td className='px-4 py-2 text-center'>
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>{segment.arrivalTime} <br /> </span> 
          ))}
        </td>
      
        <td className='px-4 py-2 text-center'>{duration}</td>
        <td className='px-4 py-2 text-center'>---</td>
        <td className='px-4 py-2 text-center'>
          {price} <br /> <button type="submit" value="" className="px-4 py-2 mt-1 bg-indigo-900 text-white rounded-md shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800" >SELECT</button>
        </td>
      </tr>
    );
  })}
</tbody>
    </table>
    </div>
    </>
)
}
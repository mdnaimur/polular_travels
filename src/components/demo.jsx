import { useGlobalContext } from "../context";
import Loading from "./Loading";

export default function FlightList(){
    const {loading,traveldata} = useGlobalContext()
    if(!traveldata){
       return( <Loading />)
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
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {traveldata.map((flight, index) => (
          <tr key={index}>
             <td>   
             {flight.flightOffer.map((item, innerIndex) => (
        <div key={innerIndex}>
          {console.log(item)} {/* Log the flightOffer object */}
          {item.fareBasis.map((fareItem, innerInnerIndex) => (
            <div key={innerInnerIndex}>
              {console.log(fareItem)} {/* Log the fareBasis item */}
            </div>
          ))}
          {item.itineraries.map((itineraryItem, innerInnerIndex) => (
           <div key={innerInnerIndex}>
           {console.log('inside itineraries', itineraryItem)}
           {itineraryItem.segments.map((segmentItem, segmentIndex) => (
             <div key={segmentIndex}>
               {console.log(segmentItem.flightNumber)} {/* Log the segment item */}
               {console.log(segmentItem.arrival)} {/* Log the segment item */}
             </div>
           ))}
         </div>

          ))}
          {item.seat.map((iataItem, innerInnerIndex) => (
            <div key={innerInnerIndex}>
              {console.log(iataItem)} {/* Log the iataCode item */}
            </div>
          ))}
          {item.class.map((classItem, innerInnerIndex) => (
            <div key={innerInnerIndex}>
              {console.log(classItem)} {/* Log the class item */}
            </div>
          ))}
        </div>
      ))}
    </td>
  

            <td>{flight.aircraft}</td>
            <td>{flight.class}</td>
            <td>{flight.fare}</td>
            <td>{flight.route}</td>
            <td>{flight.departure}</td>
            <td>{flight.arrival}</td>
            <td>{flight.duration}</td>
            <td>{flight.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </>
)
}

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
    <th>Price</th>
  </tr>
</thead>
<tbody>
  {traveldata.map((flight, index) => (
    <tr key={index}>
       <td>   
       {flight.flightOffer.map((item, innerIndex) => (
  <div key={innerIndex}>
    {console.log(item)} {/* Log the flightOffer object */}
    {item.fareBasis.map((fareItem, innerInnerIndex) => (
      <div key={innerInnerIndex}>
        {console.log(fareItem)} {/* Log the fareBasis item */}
      </div>
    ))}
    {item.itineraries.map((itineraryItem, innerInnerIndex) => (
     <div key={innerInnerIndex}>
     {console.log('inside itineraries', itineraryItem)}
     {itineraryItem.segments.map((segmentItem, segmentIndex) => (
       <div key={segmentIndex}>
         {console.log(segmentItem.flightNumber)} {/* Log the segment item */}
         {console.log(segmentItem.arrival)} {/* Log the segment item */}
       </div>
     ))}
   </div>

    ))}
    {item.seat.map((iataItem, innerInnerIndex) => (
      <div key={innerInnerIndex}>
        {console.log(iataItem)} {/* Log the iataCode item */}
      </div>
    ))}
    {item.class.map((classItem, innerInnerIndex) => (
      <div key={innerInnerIndex}>
        {console.log(classItem)} {/* Log the class item */}
      </div>
    ))}
  </div>
))}
</td>


      <td>{flight.aircraft}</td>
      <td>{flight.class}</td>
      <td>{flight.fare}</td>
      <td>{flight.route}</td>
      <td>{flight.departure}</td>
      <td>{flight.arrival}</td>
      <td>{flight.duration}</td>
      <td>{flight.price}</td>
    </tr>
  ))}
</tbody>
</table>
  segments.map((segment,segmentIndex)=>{
    const {aircraft,departure,departureTime,arrival,carrier,flightNumber} = segment
    // console.log("I am inside segment",arrival,departure,flightNumber)
  })




  {segments.map((segment, segmentIndex) => (
    <React.Fragment key={segmentIndex}>
        <td> Flight: {segment.carrier} {segment.aircraft}</td>
        <td> Aricraft: {segment.flightNumber}</td>
        <td> Depature: {segment.departure}</td>
        <td> departureTime: {segment.departureTime}</td>
        <td>arrival: {segment.arrival}</td>
    </React.Fragment>
))}
import React, { useContext, useEffect, useState } from "react";

import data from './data.js';

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [traveldata, setTravelData] = useState()


const fetchData = ()=>{
    const flightDetails = [];
    
data.forEach((items)=>{
        items.flightOffer.forEach((flight)=>{
            const itinerary = flight.itineraries[0]
            // console.log('Inside contest inineray',itinerary)
            const segments = itinerary.segments.map((segment)=>({
                departure: segment.departure.iataCode,
                departureTime: segment.departure.at,
                arrival: segment.arrival.iataCode,
                arrivalTime: segment.arrival.at,
                carrier: segment.marketingCarrier,
                flightNumber: segment.flightNumber,
                aircraft: segment.aircraft
        }))
        const duration = itinerary.duration;
        const price = flight.price;
        const fareBasis = flight.fareBasis[0][0];
        const classType = flight.class[0][0];
        const seat = flight.seat[0][0];

        flightDetails.push(
             {
                segments:segments,standard:classType, fare:fareBasis,duration:duration,price:price,seat:seat
            }
        )
       
        })
    })
//  console.log('I am flightDetails',flightDetails)
    setTravelData(flightDetails)
   
}

    useEffect(()=>{
        fetchData()
    },[])

return (
    <AppContext.Provider value={{loading,traveldata}} >
        {children}
    </AppContext.Provider>
)

}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export { AppContext, AppProvider };


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
const searchBYDate = (date) =>{
    console.log('i am context date',date)
    const filteredData = traveldata.filter((flight)=>{
         return flight.segments.some(segment=>{
            return segment.departureTime.startsWith(date);
         })
    })
    console.log('i am cotext filter',filteredData)
    setTravelData(filteredData)
}


const searchByRoute = (dep,arr) =>{
    console.log('i am context route',dep,'-->',arr)
    const filteredData = traveldata.filter((flight)=>{

        return flight.segments.some(segment=>{
            return  segment.departure === dep && segment.arrival === arr
        });
       // return flight.segments.some(segment=> segment.departure === depature || segment.arrival === depature);
    })
    console.log('i am filter route data',filteredData)
     setTravelData(filteredData)
}

    useEffect(()=>{
        fetchData()
    },[])


// useEffect(()=>{
//     searchByRoute()
// },[])

return (
    <AppContext.Provider value={{loading,traveldata,searchBYDate,searchByRoute}} >
        {children}
    </AppContext.Provider>
)

}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export { AppContext, AppProvider };


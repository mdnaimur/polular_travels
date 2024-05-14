import { useState } from "react";
import { useGlobalContext } from "../context";

const FilterSearch = ()=>{
    const {searchBYDate,searchByRoute} =  useGlobalContext()
    const [date,setDate] = useState("")
    const [routearrival,setRouteArrival] = useState("")
    const [routedep,setRouteDep] = useState("")
   
    
    // function formatDate(dateString) {
    //     const inputDate = new Date(dateString);
    
    // // Check if the inputDate is a valid date
    // if (isNaN(inputDate.getTime())) {
    //     return ''; // Invalid date, return empty string
    // }

    // const day = inputDate.getDate().toString().padStart(2, '0');
    // const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    // const year = inputDate.getFullYear();
    // return `${day}-${month}-${year}`;
    
    // }

   const handleDayChange = (inc) =>{
    const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + inc);
        const newDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        setDate(newDate)
   }
   

    const handleSearch =()=>{
        // console.log('i am submit',routearrival,'-->',routedep,'\n date is: ',date)
        // if (!routedep || !routearrival) {
        //     alert('Please select both departure and arrival routes.');
        //     return; // Stop execution if routes are not selected
        // }
        searchByRoute(routedep,routearrival)
        searchBYDate(date)
    }

   return (
    <>
    <div className="container mx-auto">
        <div> <h3 className="font-bold text-2xl">Master Price</h3> </div>
        <hr className="mb-5"/>
        <div className="mx-auto flex justify-center mb-8">
           <div className="flex h-10  border border-green-950">
            <button className="toggle-button">Round Trip</button>
            <button className="toggle-button active">One Way</button>
            <button className="toggle-button">Multi City</button>
        </div>
        </div>
       <hr className="bg-blue-600 hr mb-5"/>
        
        <div className="flex mx-auto justify-between">
        <div className="flex space-x-4 mb-5 ">

           <input type="text" 
                value={routedep}
                onChange={(e)=>setRouteDep(e.target.value)} 
                className="input-box border border-gray-600 p-1 sm:w-auto"
                placeholder="LHR" />

            <input type="text"
                   value={routearrival}
                   onChange={(e)=>setRouteArrival(e.target.value)} 
                   className="input-box border border-gray-600 p-1 sm:w-auto " placeholder="CDG" />
            {/* Date input */}
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="input-box border border-gray-600 p-1" />

            {/* Day input */}
            <input type="number"
             className="input-box border border-gray-600 p-1 w-24" 
             placeholder="Day -" 
             pattern="-?\d*" 
             onClick={() => handleDayChange(-1)} />
             
            <input type="number"
             className="input-box border border-gray-600 p-1 w-24"
             placeholder="Day +"  min="0" onClick={() => handleDayChange(1)} />

            {/* Other inputs */}
            <input type="text" className="input-box border border-gray-600 p-1" placeholder="Any time" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" className="mt-1 w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <input type="text" className="input-box border border-gray-600 p-1 w-32" placeholder="ADT" />
            <input type="text" className="input-box border border-gray-600 p-1 w-28" placeholder="1" /> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeLinecap="1.5" stroke="currentColor" className="mt-1 w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>


        </div>
        </div>
        <hr className="bg-blue-600 hr mb-5 mt-5"/>
        <div className="flex">
            <div className="flex items-center">
                <input type="checkbox" id="extraCheckbox" className=" checked:bg-blue-600 checked:border-transparent h-5 w-5" />
                <label htmlFor="extraCheckbox" className="ml-2 font-bold">Extra Options</label>
            </div>
            <div className="flex mx-auto items-center">
                <p className="font-bold">Environment</p> &nbsp; &nbsp;
                <input type="checkbox" id="dummyCheckbox" className="appearance-none border border-black checked:bg-blue-600 checked:border-transparent h-5 w-5  rounded-full" />
                <label htmlFor="dummyCheckbox" className="ml-2 font-bold">Dummy</label> &nbsp; &nbsp;
                <input type="checkbox" id="pdtCheckbox" className="appearance-none border border-black checked:bg-blue-600 checked:border-transparent h-5 w-5 rounded-full" />
                <label htmlFor="pdtCheckbox" className="ml-2 font-bold">PDT</label>
            </div>
            <div className="flex items-center">
            <button type="submit" value="" onClick={handleSearch} className="px-4 py-2 mt-1 bg-indigo-900 text-white rounded-md shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800" >SEARCH</button>
            </div>
        </div>

        <hr className="bg-blue-600 hr mt-5"/>
    </div>
</>
   )

}


export default FilterSearch;
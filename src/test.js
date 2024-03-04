import { useEffect,useReducer } from 'react'
import { fetchData } from './components/BookingPage/API';
// import { initializeTimes } from './components/BookingPage/BookingPage';

// const fetchAPI = (state) => {
//     fetch("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js")
//     .then(response => response.json())
//     .then(state =>availableTimes(state))
//   };


export const updateTimes = (state,action) => {
    switch(action.type){
        case"update": return (
            {...state, availableTimes: fetchData(action.payload)})
        default:
        return state
    };
  };

export const initializeTimes = () => {
        const initialTimes = fetchData(new Date());
        return initialTimes;
  };

export default function Test1(){
    
    const[availableTimes,dispatch]=useReducer(updateTimes,initializeTimes())
   
    useEffect(() => {
        initializeTimes()
    }, []);
    return(
        
        <div>
           time={initializeTimes()}
           <div>date={availableTimes}</div>
           <div>213</div>
        </div>
        
    )
    }
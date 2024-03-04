import BookingForm from "./BookingForm"
import "./BookingPage.css"
import{  Routes, Route, useNavigate} from "react-router-dom"
import { useEffect,useReducer } from 'react'
import { fetchData,submitAPI } from './API';

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
  // console.log(initialTimes)
  return { availableTimes: initialTimes };
};


export default function BookingPage(){

  const[availableTimes,dispatch]=useReducer(updateTimes,initializeTimes())

    useEffect(() => {
        initializeTimes()
    }, []);

    const navigate = useNavigate();
    function submitForm(formData){
      if(submitAPI(formData)){
        navigate("/Confirmation-page")
      }
    }

    return(
      <main>
          <section className="Booking">
            <BookingForm availableTimes={availableTimes}
                         dispatch={dispatch}
                         submitForm={submitForm}/>
          </section>
          
        </main>
    )
}


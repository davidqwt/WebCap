import "./BookingForm.css"
import { useState,useEffect } from "react";

export default function BookingForm({ availableTimes, dispatch,submitForm }){
    const [times,setTimes]=useState("selectTime")
    const [date,setDate]=useState("")
    const [guests,setGuests]=useState("")
    const [occasion,setOccasion]=useState("")

    const handleDateChange = (e) => {
        setDate(e);
        dispatch(e)
      };

      const handleSubmit=(e)=>{
        e.preventDefault()
        submitForm(e)
        setTimes("")
        setDate("")
        setGuests("")
        setOccasion("")
      }

      const getIsFormValid = () => {
        if (times!=="selectTime" && date!==""){
            return true
        }
      };

    return(
        <form onSubmit={handleSubmit}>
                <h1 className="bookTitle">Book Now!</h1>

            <fieldset className="bookingFieldset">

            <label htmlFor="res-date">Choose date</label>
            <input
            type="date"
             id="res-date"
             onChange={handleDateChange}>
             </input>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time "
                    value={times}
                    onChange={(e)=>{setTimes(e.target.value)}}>
{/* Array.isArray(availableTimes) && // Ensure availableTimes is an array */}
            <option value="selectTime">select a time</option>
          {availableTimes.availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
             </select>

           <label htmlFor="guests">Number of guests</label>
           <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=>{setGuests(e.target.value)}}></input>

           <label htmlFor="occasion">Occasion</label>
           <select id="occasion" value={occasion} onChange={e=>{setOccasion(e.target.value)}}>
              <option>Birthday</option>
              <option>Anniversary</option>
           </select>

          <button type="submit" className="bookingButton"aria-label="On Click" value="Make Your reservation" disabled={!getIsFormValid()}>Submit</button>

          </fieldset>
        </form>
    )
}
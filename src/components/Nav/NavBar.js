import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from '../Homepage/Homepage'
import CustomersSay from "../CustomersSay/CustomersSay";
import BookingPage from "../BookingPage/BookingPage";
import littleIcon from "../../icons_assets/little lemon icon.png"
import menuIcon from "../../icons_assets/🦆 icon _hamburger menu.svg"
import "./NavBar.css"
import Test1 from "../../test";
import ConfirmPage from "../BookingPage/ConfirmedBooking";

function NavBar(){
    const[open,setOpen]=useState(false)
    const toggleIcon=()=>{
        setOpen(!open)
    }
    return(
        <container>
            <nav className='nav'>
                <Link to="/" className="littleIcon" > <img src={littleIcon} alt="little lemon icon" style={{height:70, width:270}}/> </Link>
                
                <Link to="/" className={open ? "sidebar" : 'navItem'} >HomePage</Link>
                <Link to="/BookingPage" className={open ? "sidebar" : 'navItem'}>Booking</Link>
                <Link to="/customersSay" className={open ? "sidebar" : 'navItem'}>CustomersSay</Link>
                <Link to="/test" className={open ? "sidebar" : 'navItem'}>Test</Link>

                <img src={menuIcon} className="menuIcon" onClick={toggleIcon}></img>
            </nav>
            <Routes>
                 <Route path="/" element={<HomePage />}></Route>
                 <Route path="/customersSay" element={<CustomersSay />}></Route>
                 <Route path="/BookingPage" element={<BookingPage />}></Route>
                 <Route path="/test" element={<Test1 />}></Route>
                 <Route path="/Confirmation-page" element={<ConfirmPage />}></Route>
            </Routes>
        </container>
    )
}

export default NavBar
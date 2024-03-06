import { Routes, Route, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import HomePage from '../Homepage/Homepage'
import CustomersSay from "../CustomersSay/CustomersSay";
import BookingPage from "../BookingPage/BookingPage";
import littleIcon from "../../icons_assets/little lemon icon.png"
import menuIcon from "../../icons_assets/🦆 icon _hamburger menu.svg"
import "./NavBar.css"
import ConfirmPage from "../BookingPage/ConfirmedBooking";
import Menu from "../Menu/Menu";
import About from "../About/About";
import LoginForm from "../Login/LoginForm";
import Signup from "../Login/Signup";

const NavBar = () => {
    useEffect(() => {
      const navbarToggler = document.querySelector(".menuIcon");
      const navbarCollapse = document.querySelector(".navbar-collapse");

      const handleToggleClick = () => {
        navbarCollapse.classList.toggle("show");
      };

      navbarToggler.addEventListener("click", handleToggleClick);

      return () => {
        navbarToggler.removeEventListener("click", handleToggleClick);
      };
    }, []);

 return(
    <div>
    <nav className="nav">
        <Link to="/" > <img src={littleIcon} alt="little lemon icon" style={{height:70, width:270}}/> </Link>

      
      <div className="navbar">
        <ul className="navbar-collapse">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/menu">Menu</Link></li>
          <li className="nav-item"><Link to="/BookingPage">Booking</Link></li>
          <li className="nav-item"><Link to="/customersSay">Testimonials</Link></li>
          <li className="nav-item"><Link to="/Login">Login</Link></li>
        </ul>
     </div>

        <button className="menuIcon" aria-label="Toggle navigation" >
              <img src={menuIcon}></img>
      </button>
      

      
    </nav>
<Routes>
             <Route path="/" element={<HomePage />}></Route>
             <Route path="/customersSay" element={<CustomersSay />}></Route>
             <Route path="/BookingPage" element={<BookingPage />}></Route>
             <Route path="/menu" element={<Menu />}></Route>
             <Route path="/about" element={<About />}></Route>
             <Route path="/Login" element={<LoginForm />}></Route>
             <Route path="/Signup" element={<Signup />}></Route>
             <Route path="/Confirmation-page" element={<ConfirmPage />}></Route>
        </Routes>
        </div>
    )
}

export default NavBar

import { Routes, Route, Link } from "react-router-dom";
import HomePage from '../Homepage/Homepage'
import CustomersSay from "../CustomersSay/CustomersSay";
import littleIcon from "../../icons_assets/little lemon icon.png"
import "./NavBar.css"

function NavBar(){
    return(
        <container>
            <nav className='nav'>
                <Link to="/" className="littleIcon" > <img src={littleIcon} alt="little lemon icon" style={{height:70, width:270}}/> </Link>
                <Link to="/" className="navItem">HomePage</Link>
                <Link to="/customersSay" className="navItem">CustomersSay</Link>
                <Link to="/customersSay" className="navItem">CustomersSay</Link>
            </nav>
            <Routes>
                 <Route path="/" element={<HomePage />}></Route>
                 <Route path="/customersSay" element={<CustomersSay />}></Route>
            </Routes>
        </container>
    )
}

export default NavBar
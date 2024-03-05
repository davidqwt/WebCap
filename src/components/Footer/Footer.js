import FooterImg from "../../icons_assets/little lemon icon.png";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/BookingPage">Booking</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact us</h4>
            <address className="footer-contact">
              123 xxx Street
              <br />
              City, Country
              <br />
              <a href="">xxx-xxx-xxxx</a>
              <br />
              <a href="">xxx@littlelemon.com</a>
            </address>
          </div>

          <div className="footer-column">
            <h4>Social Media</h4>
            <ul className="socialMedia">
                <li><a href="">ins</a></li>
                <li><a href="">facebook</a></li>
                <li><a href="">xxx@littlelemon.com</a></li>
            </ul>
            </div>

        </div>
        <p className="footer-copyright">&copy; 2023 Coursera Meta Front-End Developer.</p>
      </footer>
    );
  };
  
  export default Footer;
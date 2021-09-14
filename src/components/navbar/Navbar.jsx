import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import navimage from "../../media/Kiembeni3.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src={navimage}
            alt=""
          />
          <Link to ="/" className="link"><span>Home</span></Link>
          <Link to ="/analytics" className="link"><span>Analytics</span></Link>
          <Link to ="/transactions" className="link"><span>Transactions</span></Link>
          <Link to ="/reports" className="link"><span>Reports</span></Link>
          <Link to ="/explore" className="link"><span>Explore</span></Link>
          <Link to ="/staff" className="link"><span>Staff</span></Link>
          <Link to ="/services" className="link"><span>Services</span></Link>
          <Link to ="/mail" className="link"><span>Mail</span></Link>
          <Link to ="/shop" className="link"><span>Shop</span></Link>
        
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Wilfred</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

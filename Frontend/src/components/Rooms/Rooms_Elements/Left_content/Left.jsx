// import React from 'react'
import "./Left.css";
import { useNavigate } from "react-router-dom";
import Rom_Logo from "./Rom_Logo";
import Slide_Bookings from "./Slide_bar/Slide_Bookings";
import Slide_Dashboard from "./Slide_bar/Slide_Dashboard";
import Slide_Guest from "./Slide_bar/Slide_Guest";
import Rooms_slide from "./Slide_bar/Rooms_slide";
import Services_Slide from "./Slide_bar/Services_Slide";
import Staff_Slide from "./Slide_bar/Staff_Slide";
import Reports_Slide from "./Slide_bar/Reports_Slide";
import Slide_Settings from "./Slide_bar/Slide_Settings";
import Slide_Logout from "./Slide_bar/Slide_Logout";
const Left = () => {
   const navigate = useNavigate();
  function demo1() {
    navigate("/"); // safe navigation
  }
  return (
    <div className="Left_Content">
      <div className="Rom_Logo_Container">
        <button onClick={demo1}>
<Rom_Logo />
        </button>
        
      </div>
      <div className="Slide_items">
        <Slide_Dashboard />
        <Slide_Bookings />
        <Rooms_slide />
        <Slide_Guest/>
        <Staff_Slide/>
        <Services_Slide/>
        <Reports_Slide/>
        <Slide_Settings/>
        <Slide_Logout/>
      </div>
    </div>
  );
};


export default Left;

import {
  FaTachometerAlt,   // Dashboard
  FaBook,            // Bookings
  FaBed,             // Rooms
  FaUser,            // Guests
  FaUsers,           // Staff
  FaConciergeBell,   // Services
  FaChartBar,        // Reports
  FaCog,             // Settings
  FaSignOutAlt       // Logout
} from "react-icons/fa";
const sidebarStyle = {
  width: "200px",
  height: "100vh",
 // dark green background
  color: "white",             // text color
  display: "flex",            // enable flexbox
  flexDirection: "column",    // stack items vertically
  gap: "20px",                // spacing between items
  padding: "20px"
};
const Nav_Buttons = () => {
  return (
    <div style={sidebarStyle}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaBook /> Bookings</li>
        <li><FaBed /> Rooms</li>
        <li><FaUser /> Guests</li>
        <li><FaUsers /> Staff</li>
        <li><FaConciergeBell /> Services</li>
        <li><FaChartBar /> Reports</li>
        <li><FaCog /> Settings</li>
        <li><FaSignOutAlt /> Logout</li>
      </ul>
    </div>
  )
}

export default Nav_Buttons;
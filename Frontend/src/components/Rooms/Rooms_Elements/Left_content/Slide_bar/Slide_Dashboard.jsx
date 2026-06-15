import {
  FaTachometerAlt  // Dashboard
} from  "react-icons/fa";
const style = {
  backgroundColor: "#1C443C",
  border: "none",
  color: "white",
  width: "auto",
   display:"flex",
  justifyContent: "space-between",
  gap:"10px",
  height: "50px",
  padding: "3px",
  fontSize: "20px",
  cursor: "pointer"
};

const Slide_Dashboard = () => {
  return (
    <div>
        <a  href="/Dashboard"><button style={style}><FaTachometerAlt /> Dashboard</button></a>
    </div>
  )
}

export default Slide_Dashboard

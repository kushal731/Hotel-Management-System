import {
 
  FaBed,             // Rooms
 
} from "react-icons/fa";
const style = {
  backgroundColor: "#1C443C",
  border: "none",
  color: "white",
  width: "auto",
  height: "50px",
  padding: "3px",
  fontSize: "20px",
   display:"flex",
  justifyContent: "space-between",
  gap:"10px",
  cursor: "pointer",
};

const Rooms_slide = () => {
  return (
    <div>
      <a href="/Rooms">
              <button style={style}>
                <FaBed /> Rooms
              </button>
            </a>
           
    </div>
  )
}

export default Rooms_slide

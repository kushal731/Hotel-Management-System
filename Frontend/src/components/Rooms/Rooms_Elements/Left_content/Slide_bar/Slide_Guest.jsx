import {
 
   FaUser,            // Guests
 
} from "react-icons/fa";
const style = {
  backgroundColor: "#1C443C",
  border: "none",
  color: "white",
  width: "auto",
  height: "50px",
   display:"flex",
  justifyContent: "space-between",
  gap:"10px",
  padding: "3px",
  fontSize: "20px",
  cursor: "pointer",
};

const Slide_Guest = () => {
  return (
    <div>
      <a href="/Guest">
                    <button style={style}>
                      <FaUser/> Guest
                    </button>
                  </a>
    </div>
  )
}

export default Slide_Guest

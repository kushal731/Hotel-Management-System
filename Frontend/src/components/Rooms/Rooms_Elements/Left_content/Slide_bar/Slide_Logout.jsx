import {
  FaSignOutAlt, // Logout
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

const Slide_Logout = () => {
  return (
    <div>
      <a href="/Logout">
        <button style={style}>
          <FaSignOutAlt/> Logout
        </button>
      </a>
    </div>
  );
};

export default Slide_Logout;

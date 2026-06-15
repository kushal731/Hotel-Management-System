import {
  FaCog, // Settings
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

const Slide_Settings = () => {
  return (
    <div>
      <a href="/Settings">
        <button style={style}>
          <FaCog /> Settings
        </button>
      </a>
    </div>
  );
};

export default Slide_Settings;

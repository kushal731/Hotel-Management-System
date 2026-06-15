import {
  FaUsers, // Staff
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

const Staff_Slide = () => {
  return (
    <div>
      <a href="/Staff">
        <button style={style}>
          <FaUsers /> Staff
        </button>
      </a>
    </div>
  );
};

export default Staff_Slide;

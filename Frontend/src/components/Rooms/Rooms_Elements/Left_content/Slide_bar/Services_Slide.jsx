import {
  FaConciergeBell, // Services
} from "react-icons/fa";
const style = {
  backgroundColor: "#1C443C",
  border: "none",
  color: "white",
  width: "auto",
  height: "50px",
  padding: "3px",
   display:"flex",
  justifyContent: "space-between",
  gap:"10px",
  fontSize: "20px",
  cursor: "pointer",
};

const Services_Slide = () => {
  return (
    <div>
      <a href="/Services">
        <button style={style}>
          <FaConciergeBell /> Services
        </button>
      </a>
    </div>
  );
};

export default Services_Slide;

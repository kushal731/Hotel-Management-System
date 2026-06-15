import {
  FaBook, // Bookings
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
const Slide_Bookings = () => {
  return (
    <div>
      <a href="/Bookings">
        <button style={style}>
          <FaBook /> Bookings
        </button>
      </a>
    </div>
  );
};

export default Slide_Bookings;

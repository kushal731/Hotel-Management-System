import {
  FaChartBar,        // Reports
} from "react-icons/fa";
const style = {
  display:"flex",
  justifyContent: "space-between",
  gap:"10px",
  backgroundColor: "#1C443C",
  border: "none",
  color: "white",
  width: "auto",
  height: "50px",
  padding: "3px",
  fontSize: "20px",
  cursor: "pointer",
};

const Reports_Slide = () => {
  return (
    <div>
          <a href="/Reports">
            <button style={style}>
              <FaChartBar /> Reports
            </button>
          </a>
        </div>
  )
}

export default Reports_Slide

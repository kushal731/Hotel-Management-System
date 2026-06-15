import Left from "./Rooms_Elements/Left_content/Left"
import Right from "./Rooms_Elements/Right_content/Right"
import './Rooms.css'
const Rooms = () => {
  return (
    <div className="Rooms_Main">
      <div className="Rm_LFT_MAin"><Left/></div>
      <div className="Rm_Rth_MAin">
        <Right/>
      </div>
      
    </div>
  )
}

export default Rooms

import Add_Rooms from "./Head_Elements/Add_Rooms";
import Breadcrumb from "./Head_Elements/Breadcrumb";
import H2 from "./Head_Elements/H2";
import Input_bar from "./Head_Elements/Input_bar";
import Option from "./Head_Elements/Option";
import "./Head_main_part.css";
const Head_main = () => {
  return (
    <div className="Head_main_part">
      <H2 />
      <div className="rooms-header">
        <div>
        <Breadcrumb />
      </div>
      <div className="toolbar">
        <Input_bar />
        <Option />
        <Add_Rooms />
      </div>
      </div>
      
    </div>
  );
};

export default Head_main;

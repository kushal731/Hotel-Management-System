import Heading from "./Heading";
import Content from "./Content";
import Get_Started from "./Get_Started";
import Explore_rooms from "./Explore_rooms";

import "./Section1_Main.css";
const Section1 = () => {
  return (
    <div className="Section1_Main">
      <Heading />
      <Content />
      <div className="Section1_Main_Bottom">
        <div className="Get_Started_main">
          <Get_Started />
          <Explore_rooms />
        </div>
        
      </div>
    </div>
  );
};

export default Section1;

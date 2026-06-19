import { Link } from "react-router-dom";
import "./Breadcrumb.css";
const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <Link to="/dashboard">Dashboard</Link> 
      <span> &gt; </span>
      <Link to="/Rooms">Rooms</Link>
    </nav>
  )
}

export default Breadcrumb

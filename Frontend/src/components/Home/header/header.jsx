// Header.jsx
import Logo from "./Header_components/Logo/Logo.jsx";
import Nav_Home from "./Header_components/Navbar/Nav_Home";
import Rooms from "./Header_components/Navbar/Rooms";
import About from "./Header_components/Navbar/About";
import Services from "./Header_components/Navbar/Services";
import Nav_Login from "./Header_components/Navbar/Nav_Login";
import "./header.css"; // external stylesheet

const Header = () => {
  return (
    <header className="header">
      <Logo />
      
      <div className="nav-buttons">
        <Nav_Home />
        <Rooms />
        <Services />
        <About />
        
      </div>
<Nav_Login />
    </header>
  );
};

export default Header;

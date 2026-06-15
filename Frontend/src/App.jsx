import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/login";
import Rooms from "./components/Rooms/Rooms";
import Dashboard from "./components/Dashboard/Dashboard"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* Dashboard page */}
  
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App


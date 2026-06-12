import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/login";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard page */}
  
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App


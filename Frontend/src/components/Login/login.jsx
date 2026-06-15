import { useState } from "react";
import './Login.css'
import Lutus from "../../assets/Lutus.png";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="container">
      <div className="card">  

        {/* LEFT SIDE */}
        <div className="left-panel">
          <div className="logo-section">
            <img src={Lutus} alt="Logo" className="logo" />
            
          </div>
          <h1>Luxury Resort</h1>

          <p>
            Discover premium hospitality with comfort, luxury, and unforgettable
            experiences designed for your perfect stay.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-panel">

          {/* TAB BUTTONS */}
          <div className="tab-buttons">
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              REGISTER
            </button>

            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              LOGIN
            </button>
          </div>

          {/* REGISTER FORM */}
          {!isLogin ? (
            <form className="form">

              <input type="text" placeholder="First Name" />

              <input type="email" placeholder="Email" />

              <input type="password" placeholder="Create Password" />

              <input type="password" placeholder="Retype Password" />

              <div className="checkbox">
                <input type="checkbox" />
                <label>
                  I agree to <span>Terms of Use</span> &{" "}
                  <span>Privacy Policy</span>
                </label>
              </div>

              <button className="submit-btn">REGISTER</button>
            </form>
          ) : (
            /* LOGIN FORM */
            <form className="form">

              <input type="email" placeholder="Email" />

              <input type="password" placeholder="Password" />

              <div className="forgot">
                <a href="/">Forgot Password?</a>
              </div>
              <a href="/"><button className="submit-btn">LOGIN</button></a>
              
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login



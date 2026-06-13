

const S1 = () => {
  return (
    <div className="login-page">

  <div className="login-left">
      <div className="logo">Hotelier</div>

      <h1>Welcome Back</h1>

      <p>
        Access your hotel dashboard and manage bookings,
        rooms, guests and revenue efficiently.
      </p>

      <img src="" alt="hotel"/>
  </div>


  <div className="login-right">

      <div className="login-card">

          <h2>Sign In</h2>

          <input type="email" placeholder="Email Address"/>

          <input type="password" placeholder="Password"/>

          <div className="remember">
              <input type="checkbox"/>
              Remember Me
          </div>

          <button>Login</button>

          <p>Forgot Password?</p>

      </div>

  </div>

</div>
  )
}

export default S1

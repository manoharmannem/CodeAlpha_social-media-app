import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  const savedUser = JSON.parse(
    localStorage.getItem("registeredUser")
  );

  if (
    savedUser &&
    savedUser.email === email.trim() &&
    savedUser.password === password.trim()
  ) {
    localStorage.setItem(
      "pulseUser",
      JSON.stringify(savedUser)
    );

    alert("Login Successful");

    window.location.href = "/home";
  } else {
    alert("Invalid Email or Password");
  }
};

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
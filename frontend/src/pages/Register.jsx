import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const user = ({
      username,
      email,
      password,
    });

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(user)
    );

    alert("Registration Successful");
    localStorage.setItem(
        "pulseUser",
      JSON.stringify(user)
);

    navigate("/");
  };

  return (
    <div className="auth-container">
      <form
        className="auth-card"
        onSubmit={handleRegister}
      >
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
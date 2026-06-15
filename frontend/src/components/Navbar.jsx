import { Link } from "react-router-dom";

function Navbar() {
  const clearData = () => {
    localStorage.removeItem("pulsePosts");
    window.location.reload();
  };
  const logout = () => {
  localStorage.removeItem("pulseUser");
  window.location.href = "/login";
};

  return (
    <nav className="navbar">
      <h2>Pulse</h2>

      <div className="nav-links">
        <button
  className="logout-btn"
  onClick={logout}
>
  Logout
</button>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>

        <button
          className="reset-btn"
          onClick={clearData}
        >
          Reset Feed
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
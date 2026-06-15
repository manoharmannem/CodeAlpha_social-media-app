import {
  FaHome,
  FaCompass,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaCog
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Pulse</h2>

      <ul>
        <li><FaHome /> Home</li>
        <li><FaCompass /> Explore</li>
        <li><FaBell /> Notifications</li>
        <li><FaEnvelope /> Messages</li>
        <li><FaBookmark /> Bookmarks</li>
        <li><FaCog /> Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
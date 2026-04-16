import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    // (Optional) remove user info if you store it
    localStorage.removeItem("user");

    // Redirect to login
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;

import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Outlet sẽ render các nested route */}
      <Outlet />
    </div>
  );
}

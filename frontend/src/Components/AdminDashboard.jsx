import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Manage users, view reports, and configure system settings.</p>
      <button className="btn btn-warning me-2">Add User</button>
      <button className="btn btn-info">View Reports</button>
    </div>
  );
};

export default AdminDashboard;

import React from "react";

const ManagerDashboard = () => {
  return (
    <div>
      <h2>Manager Dashboard</h2>
      <p>View team performance and approve tasks.</p>
      <button className="btn btn-warning me-2">Approve Task</button>
      <button className="btn btn-info">View Team</button>
    </div>
  );
};

export default ManagerDashboard;

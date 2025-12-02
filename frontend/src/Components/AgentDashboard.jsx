import React from "react";

const AgentDashboard = () => {
  return (
    <div>
      <h2>Agent Dashboard</h2>
      <p>Manage assigned tickets and customers.</p>
      <button className="btn btn-warning me-2">New Ticket</button>
      <button className="btn btn-info">View Customers</button>
    </div>
  );
};

export default AgentDashboard;

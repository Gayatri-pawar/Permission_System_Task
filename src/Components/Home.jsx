import React from "react";
import  RolePermissions  from "./RolePermissions";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import AgentDashboard from "./AgentDashboard";
import SellerDashboard from "./SellerDashboard";
import BuyerDashboard from "./BuyerDashboard";

const Home = ({ userName, onLogout, userRole }) => {
  const permissions = RolePermissions[userRole] || {};

  const renderDashboardComponent = () => {
    switch (userRole) {
      case "admin":
        return <AdminDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "agent":
        return <AgentDashboard />;
      case "seller":
        return <SellerDashboard />;
      case "buyer":
        return <BuyerDashboard />;
      default:
        return <p>No dashboard available.</p>;
    }
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div
        className="bg-success text-white d-flex flex-column justify-content-between p-3"
        style={{ width: "250px" }}>
        <div>
        <div className="d-flex align-items-center mb-3">
  {/* Menu Icon */}
  <span className="me-3" style={{ fontSize: "1.5rem", cursor: "pointer" }}>
    &#9776; {/*  hamburger menu icon */}
  </span>

  {/* Sidebar Title */}
  <h3 className="mb-0 h5">Sidebar</h3>
</div>

          <ul className="nav flex-column mt-4">
            {Object.entries(permissions).map(([key, value]) => {
              if (!value) return null;
              return (
                <li key={key} className="nav-item">
                  <a className="nav-link text-white" href="#">
                    {key}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <button className="btn btn-danger w-100" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center p-3 bg-success border-bottom">
          <span className="fw-bold text-white h3">Role Permission System</span>
          <span className="fw-bold text-white">{`${userName}_${userRole}`}</span>
        </div>

        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          {renderDashboardComponent()}
        </div>
      </div>
    </div>
  );
};

export default Home;

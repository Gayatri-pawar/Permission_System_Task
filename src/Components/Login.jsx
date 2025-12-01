import React, { useState } from "react";
const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
const handleSubmit = async (e) => {
    e.preventDefault();
try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
const data = await res.json();
 if (data.success) {
        // Successful login → redirect to Home
       onLogin(data.user.username, data.user.role.replace("_role", ""));
 } else {
        // Failed login 
        setError(data.message || "Invalid username or password");
      }
    } catch (err) {
      console.error("Server error:", err);
      setError("Server error");
    }
  };
 return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
<form onSubmit={handleSubmit} className="card p-4 shadow" style={{ width: "350px", backgroundColor: "rgba(255, 255, 255, 0.85)" }}>
        <h3 className="text-center mb-4">Login</h3>
          <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-danger mb-3">{error}</div>}

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

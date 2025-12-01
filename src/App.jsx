
import React, { useState } from "react";
import LoginPage from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username, role) => {
   setLoggedInUser({ username, role });
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <>
      {!loggedInUser ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Home
          userName={loggedInUser.username}
          userRole={loggedInUser.role}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}

export default App;

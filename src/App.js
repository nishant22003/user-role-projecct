import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";

const App = () => (
  <Router>
    <nav>
      <Link to="/users">User Management</Link> |{" "}
      <Link to="/roles">Role Management</Link>
    </nav>
    <Routes>
      <Route path="/users" element={<UserManagement />} />
      <Route path="/roles" element={<RoleManagement />} />
    </Routes>
  </Router>
);

export default App;

import React from "react";
import { Link, Outlet } from "react-router-dom";
function Users() {
  return (
    <div>
      <Link to="1">
        <h2>User1</h2>
      </Link>
      <Link to="2">
        <h2>User2</h2>
      </Link>
      <Link to="3">
        <h2>User3</h2>
      </Link>

      <Outlet />
    </div>
  );
}

export default Users;

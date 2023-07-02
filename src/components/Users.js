import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
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
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing Active users</h2>
      ) : (
        <h2>Showing All users</h2>
      )}
      <Outlet />
    </div>
  );
}

export default Users;

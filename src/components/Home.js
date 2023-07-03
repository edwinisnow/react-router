import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  console.log("Home Component");
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place order
      </button>
    </>
  );
}

export default Home;

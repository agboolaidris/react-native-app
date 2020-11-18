import React from "react";
import Content from "./Content/Content";
import Team from "./Team/Team";
import Welcome from "./Welcome/Welcome";

function Home() {
  return (
    <div>
      <Content />
      <Welcome />
      <Team />
    </div>
  );
}

export default Home;

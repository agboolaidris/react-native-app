import React, { useEffect } from "react";
import Content from "./Content/Content";
import Team from "./Team/Team";
import Welcome from "./Welcome/Welcome";
import Aos from "aos";
import "aos/dist/aos.css";

import MemberInfo from "./Team/MemberInfo";
function Home() {
  return (
    <div>
      <Content />

      <Welcome />

      <Team />
      <MemberInfo />
    </div>
  );
}

export default Home;

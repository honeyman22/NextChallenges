import React from "react";
import Explore from "../components/Careaar Landing/Explore";
import Gobal from "../components/Careaar Landing/Gobal";
import HotCategory from "../components/Careaar Landing/HotCategory";
import Jobs from "../components/Careaar Landing/Jobs";
import OurClient from "../components/Careaar Landing/OurClient";
import Recuters from "../components/Careaar Landing/Recuters";
import TopCompany from "../components/Careaar Landing/TopCompany";

const careerLanding = () => {
  return (
    <div>
      <Explore />
      <Jobs />
      <TopCompany />
      <HotCategory />
      <Gobal />
      <Recuters />
      {/* <OurClient />
    
    
     */}
    </div>
  );
};

export default careerLanding;

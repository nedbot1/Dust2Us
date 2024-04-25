import React from "react";
import Hero from "@/app/components/hero";
import Work from "@/app/components/work";
import Navbar from "@/app/components/navbar";

const work = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Our work" message="This is some of our recent work." />
      <Work />
    </div>
  );
};

export default work;

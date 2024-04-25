import React from "react";
import Contact from "@/app/components/contacts";
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";

const contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes."
      />
      <Contact />
    </div>
  );
};

export default contact;

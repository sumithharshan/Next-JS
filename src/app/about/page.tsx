import React from "react";
import AboutDetail from "../components/AboutDetail";
import PageTemplate from "../components/PageTemplate";

const About: React.FC = () => {
  return <PageTemplate title="About Us" content={<AboutDetail />} />;
};

export default About;

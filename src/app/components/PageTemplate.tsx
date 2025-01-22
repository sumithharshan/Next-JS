import React from "react";
import Image from "next/image";
import HeaderNav from "../components/HeaderNav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

interface PageTemplateProps {
  title: string;
  content: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, content }) => {
  return (
    <>
      <HeaderNav />
      <Hero />
      {content}
      <Footer />
    </>
  );
};

export default PageTemplate;

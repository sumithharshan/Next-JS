import Image from "next/image";
import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import RecentBlogs from "./components/RecentBlogs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <Hero />
      <Featured />
      <RecentBlogs />
      <Footer />
    </>
  );
}

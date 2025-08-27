"use client"
import Socials from "./_components/Socials";
import Home from "./_components/Home";
import FallingDots from "./_components/FallingDots";
import Sidebar from "./_components/Sidebar";
import TechnicalStack from "./_components/TechnicalStack";
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";

export default function Page() {


  return (
    <div className="w-full min-h-screen bg-[#1e1e1e] overflow-x-hidden">
      <Sidebar/>
      <FallingDots/>
      
      <Socials/>
      <Home/>
      <TechnicalStack/>
      <Projects/>
      <Contact/>
      <Footer/>
  
   </div>
  );
}

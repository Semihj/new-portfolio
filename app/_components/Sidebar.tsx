"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import linkedn from "@/public/linkedin.png";
import outlook from "@/public/outlook.png";

type Props = {};

export default function Sidebar() {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className="w-full ">
      {!isSidebar && (
        <div
          className="fixed top-5 right-5 group flex flex-col gap-2 cursor-pointer z-40"
          onClick={() => setIsSidebar(true)}
        >
          <div className="w-8 h-1 transform transition group-hover:rotate-45 group-hover:translate-y-1 bg-white"></div>{" "}
          <div className="w-8 h-1 transform transition group-hover:-translate-y-2 group-hover:-rotate-45 bg-white">
              
          </div>
        </div>
      )}

      <div
        className={`w-screen fixed h-screen  transition-all duration-200 `}
        style={{ zIndex: isSidebar ? "40" : "0" }}
      >
        <div
          className="w-[30vw]  h-full opacity-0 "
          onClick={() => setIsSidebar(false)}
        ></div>
        <div
          className={`fixed top-0 right-0 w-0 h-screen bg-purple-950 z-20 transition-all opacity-0  ${
            isSidebar ? "w-[70vw] opacity-100" : "w-0"
          } `}
        >
          <div className="flex flex-col lg:flex-row text-white w-full h-full justify-center items-center gap-5 lg:gap-10">
           {/* --- Socials --- */}
<div className="flex flex-col gap-4">
  <h1 className="text-4xl font-semibold">Socials</h1>
  <div className="flex flex-col gap-4">
    {/* GitHub */}
    <Link
      href="https://github.com/semihj"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-2xl font-semibold hover:text-gray-300 transition"
    >
      <FaGithub className="text-3xl" />
      <p>GitHub</p>
    </Link>

    {/* LinkedIn */}
    <Link
      href="https://www.linkedin.com/in/semih-sazak"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-2xl font-semibold hover:text-gray-300 transition"
    >
      <Image src={linkedn} alt="LinkedIn" className="w-10 h-10  " />
      <p>LinkedIn</p>
    </Link>

    {/* Outlook */}
    <Link
      href="mailto:semihsazak1@outlook.com"
      className="flex items-center gap-4 text-2xl font-semibold hover:text-gray-300 transition"
    >
      <Image src={outlook} alt="Outlook Email" className="w-10 h-10  " />
      <p>Email</p>
    </Link>
  </div>
</div>

{/* --- Sections --- */}
<div className="flex flex-col gap-4 mb-4">
  <h1 className="text-4xl font-semibold">Sections</h1>
  <div className="flex flex-col gap-4">
    <Link
      href="#techstack"
      className="flex items-center gap-4 text-2xl font-semibold hover:text-gray-300 transition"
    >
      <p>Tech Stack</p>
    </Link>
    <Link
      href="#projects"
      className="flex items-center gap-4 text-2xl font-semibold hover:text-gray-300 transition"
    >
      <p>Projects</p>
    </Link>
    <Link
      href="#contacts"
      className="flex items-center gap-4 text-2xl font-semibold hover:text-gray-300 transition"
    >
      <p>Contact</p>
    </Link>

  </div>
</div>

          </div>
          {isSidebar && (
            <div
              className="fixed top-5 right-5 group flex flex-col gap-2 cursor-pointer  "
              onClick={() => setIsSidebar(false)}
            >
              <div className="w-8 h-1 transform transition  rotate-45  translate-y-1 bg-white"></div>
              <div className="w-8 h-1 transform transition  -translate-y-2  -rotate-45 bg-white">
                  
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

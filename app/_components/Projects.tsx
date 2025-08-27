"use client";

import React, { useState } from 'react'
import projects from "@/public/projects.png"
import Image from 'next/image'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import aiblogger from "@/public/ai-blogger-project1.png"
import shoetopia from "@/public/shoetopia-project1.png"
import Link from 'next/link'

type Props = {}

function Projects({}: Props) {


 

  return (
    <div className='p-5 lg:py-20 lg:px-40 flex flex-col text-white gap-4 ' id='projects'>
      <div className="flex items-center gap-4 ">
      <div className="border p-2 bg-purple-400 rounded-full "><Image src={projects} alt='' className='' /></div>   
      <h1 className='text-4xl font-semibold' >Feautered Projects</h1>

      </div>
      <div className="flex flex-col justify-between z-20  ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className=" relative h-max group z-20  transition  cursor-pointer">
            <Image src={aiblogger} alt='AI-BLOGGER' className=' object-cover h-80  group-hover:blur-[1px]  opacity-50   ' 
          />
            <div className="flex flex-col absolute top-0 w-full h-full z-30">
              <div className="w-full h-full border flex flex-col justify-center px-2 lg:px-5 gap-2">
                <h1 className=' font-semibold text-2xl text-shadow-lg ' >AI BLOGGER</h1>
                <p className='text-lg  ' > Create a blog post just by typing few words</p>
                <div className="flex w-full flex-wrap gap-2">
                <div className="text-sm p-1 px-2 font-semibold text-white bg-[#2c2929]  rounded-3xl w-max">Next.js</div>
                <div className="text-sm p-1 px-2 font-semibold text-white bg-[#2c2929]  rounded-3xl w-max">TypeScript</div>
                <div className="text-sm p-1 px-2 font-semibold text-white bg-[#2c2929]  rounded-3xl w-max">Convex</div>
                <div className="text-sm p-1 px-2 font-semibold text-white bg-[#2c2929]  rounded-3xl w-max">ClerkAuth</div>
                <div className="text-sm p-1 px-2 font-semibold text-white bg-[#2c2929]  rounded-3xl w-max">AI-Intergation</div>
             </div> 
             <div className="flex gap-4 absolute bottom-4 ">
                <Link href={"https://github.com/Semihj/ai-blogger"} target='_blank' className="text-sm p-1 px-2 bg-white text-black font-semibold  rounded-3xl w-max flex items-center gap-2">
                    Source Code <FaGithub className='text-xl' />
                </Link>
                <Link href={"https://ai-blogger.vercel.app/"} target='_blank' className="text-sm p-1 px-2 bg-white text-black  font-semibold  rounded-3xl w-max flex items-center gap-2">
                    Live Project
                    <FaExternalLinkAlt/>
                </Link>

             </div>
               </div>
              
            </div>
          </div>
          <div className=" relative h-max group z-20  transition  cursor-pointer">
            <Image src={shoetopia} alt='AI-BLOGGER' className=' object-cover h-80  group-hover:blur-[1px]  opacity-50  ' />
            <div className="flex flex-col absolute top-0 w-full h-full z-30">
              <div className="w-full h-full border flex flex-col justify-center px-2 lg:px-5 gap-2">
                <h1 className=' font-bold text-2xl text-shadow-lg ' >ShoeTopia</h1>
                <p className='text-lg  font-semibold  ' > Your Perfect Pair awaits in ShoeTopia</p>
                <div className="flex w-full flex-wrap gap-2">
                <div className="text-sm p-1 px-2 font-semibold text-white bg-[#2c2929]  rounded-3xl w-max">Next.js</div>
                <div className="text-sm p-1 px-2 font-semibold text-white bg-[#2c2929]  rounded-3xl w-max">TypeScript</div>
                <div className="text-sm p-1 px-2 font-semibold text-white bg-[#2c2929]  rounded-3xl w-max">Supabase</div>
             </div> 
             <div className="flex gap-4 absolute bottom-4 ">
                <Link href={"https://github.com/Semihj/shoetopia"} target='_blank' className="text-sm p-1 px-2 bg-white text-black font-semibold  rounded-3xl w-max flex items-center gap-2">
                    Source Code <FaGithub className='text-xl' />
                </Link>
                <Link href={"https://shoetopia.vercel.app/"} target='_blank' className="text-sm p-1 px-2 bg-white text-black  font-semibold  rounded-3xl w-max flex items-center gap-2">
                    Live Project
                    <FaExternalLinkAlt/>
                </Link>

             </div>
               </div>
              
            </div>
          </div>
        

        </div>
      
        
      </div>
    </div>
  )
}

export default Projects
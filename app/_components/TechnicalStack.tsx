import React from 'react'
import techstack from "@/public/techstack.png"
import frontend from "@/public/frontend.png"
import nextjs from "@/public/next.webp"
import react from "@/public/react.png"
import ts from "@/public/ts.png"
import js from "@/public/js.png"
import backend from "@/public/backend.png"
import express from "@/public/express.png"
import nodejs from "@/public/node.png"
import python from "@/public/python.png"
import mongodb from "@/public/mongodb.svg"
import mysql from "@/public/mysql.svg"
import supabase from "@/public/supabase.png"
import firebase from "@/public/firebase.png"
import Image from 'next/image'
import database from "@/public/database.png"
import other from "@/public/other.png"
import redux from "@/public/redux.png"
import tailwind from "@/public/tailwind.png"
import seo from "@/public/seo.png"
import ai from "@/public/ai.png"
import socket from "@/public/socket.png"

type Props = {}

function TechnicalStack({}: Props) {
  return (
    <div className="p-5 lg:py-20 lg:px-40 flex flex-col text-white gap-4 " id='techstack' >
      <div className='flex gap-5 items-center' >
        <div className="border p-2 bg-purple-400 rounded-full "><Image src={techstack} alt='' /></div>
        
        <h1 className='text-3xl font-semibold' > My Technical Stack</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:py-10 z-20">
        <div className="border rounded-md flex flex-col p-5 gap-5 bg-black/90 hover:bg-purple-950/90 transition-all  cursor-pointer  ">
          <div className="flex gap-5 items-center border-b py-4 lg:w-max">
              <Image src={frontend} alt='' className='' />
              <h1 className='text-3xl font-semibold' >Front-End</h1>
          </div>
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex gap-2 items-center px-2">
              <Image src={nextjs} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>NextJS</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={react} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>ReactJS</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={ts} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>TypeScript</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={js} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>JavaScript</h1>
            </div>
          </div>
        </div>
        <div className="border rounded-md flex flex-col p-5 gap-5 bg-black/90 hover:bg-purple-950/90 transition-all  cursor-pointer ">
          <div className="flex gap-5 items-center border-b py-4 lg:w-max">
              <Image src={backend} alt='' className='' />
              <h1 className='text-3xl font-semibold' >Back-end</h1>
          </div>
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex gap-2 items-center px-2">
              <Image src={express} alt='' className='w-12 object-cover' />
              <h1 className='text-2xl font-semibold'>ExpressJS</h1>
            </div>
            <div className="flex gap-2 items-center px-2  ">
              <Image src={nodejs} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>NodeJS</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={python} alt='' className='w-12 object-cover ' />
              <h1 className='text-2xl font-semibold'>Python</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <div className="w-max  rounded-full bg-white ">
              <Image src={socket} alt='' className='w-12 object-cover' /></div>
              <h1 className='text-2xl font-semibold'>Web Sockets</h1>
            </div>
          </div>
        </div>
        <div className="border rounded-md flex flex-col p-5 gap-5 bg-black/90 hover:bg-purple-950/90 transition-all  cursor-pointer ">
          <div className="flex gap-5 items-center border-b py-4 lg:w-max">
              <Image src={database} alt='' className='w-16 ' />
              <h1 className='text-3xl font-semibold' >Database</h1>
          </div>
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex gap-4 items-center px-2">
              <Image src={mongodb} alt='' className='w-10 h-10 object-contain' />
              <h1 className='text-2xl font-semibold'>MongoDB</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={supabase} alt='' className='w-12 object-cover' />
              <h1 className='text-2xl font-semibold'>Supabase</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={mysql} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>MySQL</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={firebase} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>FireBase</h1>
            </div>
          </div>
        </div>
        <div className="border rounded-md flex flex-col p-5 gap-5 bg-black/90 hover:bg-purple-950/90 transition-all  cursor-pointer ">
          <div className="flex gap-5 items-center border-b py-4 ">
              <Image src={other} alt='' className='w-16' />
              <h1 className='text-3xl font-semibold' >Other</h1>
          </div>
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex gap-2 items-center px-2">
              <Image src={seo} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>SEO</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={tailwind} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>Tailwindcss</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={redux} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>Redux</h1>
            </div>
            <div className="flex gap-2 items-center px-2">
              <Image src={ai} alt='' className='w-12' />
              <h1 className='text-2xl font-semibold'>AI</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicalStack
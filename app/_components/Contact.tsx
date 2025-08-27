import React from 'react'
import Image from 'next/image'
import contact from "@/public/contact.png"
import outlook from "@/public/outlook.png"
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import linkedin from "@/public/linkedin.png"

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='p-5 lg:py-20 lg:px-40 flex flex-col text-white gap-4 z-20' id='contacts'>
         <div className="flex items-center gap-4 ">
              <div className="border p-2 bg-purple-400 rounded-full "><Image src={contact} alt='' className='w-12 ' /></div>   
              <h1 className='text-4xl font-semibold' >Contact </h1>
        
              </div>
              <div className="flex w-full justify-center items-center z-10  ">
                <div className="flex w-max flex-col lg:flex-row  border bg-black  h-max z-20 ">
                    <div className="flex flex-col border bg-[#270231] justify-center items-center p-3 gap-5 ">
                        <h1 className='text-2xl font-semibold' >Contact Me</h1>
                        <p className='italic text-center' >Fee Free to contact me anytime whether for hiring,<br/> collabrations  or for just a coffe chat</p>
                        <Link href={"mailto:semihsazak1@outlook.com"} className="p-2 rounded-full bg-purple-500 w-max flex items-center font-semibold text-2xl gap-4">
                           Send a Email <Image src={outlook} alt='' />
                        </Link>
                        <Link href={"mailto:semihsazak1@outlook.com"} >semihsazak1@outlook.com</Link>
                    </div>
                    <div className="flex flex-col border bg-[#270231] justify-center items-center p-3 gap-5 ">
                        <h1 className='text-2xl font-semibold' >Connect With Me</h1>
                        <p className='italic text-center' >My Socials - Don't hesitate to reach me out  </p>
                        <div className="flex gap-4 items-center">
                          <Link href={"https://github.com/semihj"} >
                          <FaGithub className='text-3xl'/>
                           </Link>
                          <Link href={"https://www.linkedin.com/in/semih-sazak"} >
                          <Image src={linkedin} alt='linkedin' />
                           </Link>
                          
                        </div>
                    </div>
                   

                </div>
              </div>
    </div>
  )
}

export default Contact
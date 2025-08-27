import React from 'react'
import {motion} from "motion/react"
import { FaGithub } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import Brightness from './Brightness';
import Image from 'next/image';
import outlook from "@/public/outlook.png"
import linkedin from "@/public/linkedin.png"
type Props = {}

function Socials({}: Props) {
  return (
    <motion.div initial={{x:-100,y:-500,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{duration:1.5}}>
      <Brightness top={10} left={10} color={"white"} position={"absolute"} />

    <div className='fixed top-0 lg:left-5 left-2 flex flex-col items-center gap-1 z-30' >

      
        <span className='w-[1px] h-2 lg:h-20 bg-purple-500' >
            
        </span>
        <Link href={"https://github.com/Semihj"} target='_blank' className=" bg-black  rounded-full ">
          <FaGithub className='text-3xl text-white '/>
          
        </Link>
        <span className='w-[1px] h-4 bg-purple-500' >
            
        </span>
         <Link href={"https://www.linkedin.com/in/semih-sazak"} target='_blank' className="   rounded-full">
          <Image src={linkedin} alt='outlook' className='w-10'/>
        </Link>
         <span className='w-[1px] h-4 bg-purple-500' >
            
        </span>
              <Link href={"mailto:semihsazak1@outlook.com"} target='_blank' className=" rounded-full ">
     <Image src={outlook} alt='' className='w-10' />
        </Link>
        
    </div> 
    </motion.div>
  )
}

export default Socials
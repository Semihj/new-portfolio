import React from 'react'
import {motion} from "motion/react"
import Link from 'next/link'
import { FaUpwork } from "react-icons/fa6";
import Brightness from './Brightness';

type Props = {}

function Home({}: Props) {
  return (
    <div className='w-full flex justify-center items-center h-[500px] lg:h-screen z-20 '>
        <motion.div initial={{y:-500,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:2}} className='text-white z-20 relative gap-3  flex flex-col max-w-[300px] lg:max-w-[500px] '>
      <Brightness top={10} left={10} color={"white"} position={"absolute"} />
<h1 className='lg:text-7xl text-4xl leading-8 text-purple-400 anton font-bold'>FULLSTACK</h1>
            <h1 className='lg:text-7xl text-4xl pl-5 mt-1 anton font-bold' >DEVELOPER</h1>
            <div className="text-xl text-left">
                <h1 className='text-xl text-gray-400 '>Hi! I'm Semih Sazak, Full-Stack Developer with 3+ years of experience creating high-performance web applications.</h1>
            </div>
            <Link href={"https://www.upwork.com/freelancers/~01ae43b5abb718b893"} target='_blank' className="p-2 text-2xl items-center flex gap-2 lg:mt-5 lg:gap-5 bg-purple-400 text-white border  w-max font-bold ">
                HIRE ME
              <div className="p-2 border rounded-full bg-green-400 "><FaUpwork/></div>  
            </Link>
        </motion.div>
    </div>
  )
}

export default Home
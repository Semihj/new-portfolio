"use client"
import React, { useEffect, useState } from 'react'
import {motion} from "motion/react"


type Props = {}

function FallingDots({}: Props) {

const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

if (!mounted) return null;
  
  return (
       <div className="overflow-hidden w-screen h-screen fixed z-10">{Array.from({length:50}).map((_,id) => (
        <motion.div
        key={id}
        className='absolute w-1 h-1 bg-gray-500 rounded-full'
        initial={{y:-20,x: Math.random() * 1920}}
        animate={{y:"100vh"}}
        transition={{repeat:Infinity,duration:Math.random() * 3 +5, ease:"linear"}}
        >

        </motion.div>
        ))}
        {Array.from({length:50}).map((_,id) => (
        <motion.div
        key={id}
        className='absolute w-1 h-1 bg-gray-500 rounded-full'
        initial={{y:-20,x: Math.random() * 1920}}
        animate={{y:"100vh"}}
        transition={{repeat:Infinity,duration:Math.random() * 3 +5, ease:"linear",delay:4}}
        >

        </motion.div>
        ))}
        </div> 
  )
}

export default FallingDots
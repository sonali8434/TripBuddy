'use client'
import { UserButton, useUser } from '@clerk/nextjs';
import { AlignEndHorizontal } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaGithub } from "react-icons/fa";
function Navbar() {
    
  return (
    <>
      <div className='max-w-4xl mx-auto flex justify-between items-center px-4  h-[5vh]'>
        <div className='flex gap-2'>
            <AlignEndHorizontal/>
            <span className='font-bold text-black'>TripBuddy</span>
        </div>
        <div className='flex items-center gap-4'>
            
            <UserButton/>
        </div>
      </div>
    </>
  )
}

export default Navbar
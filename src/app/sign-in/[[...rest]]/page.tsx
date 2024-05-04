import { SignIn } from '@clerk/nextjs'
import React from 'react'

function Page() {
  return (
   <div className='h-screen flex justify-center items-center'>
    <SignIn signUpUrl='/sign-up'/>
   </div>
  )
}

export default Page
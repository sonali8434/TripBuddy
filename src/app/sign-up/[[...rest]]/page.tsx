import { SignUp } from '@clerk/nextjs'
import React from 'react'

function Page() {
  return (
    <div className='flex items-center justify-center  h-screen'>
        <SignUp signInUrl='/sign-in'/>
    </div>
  )
}

export default Page
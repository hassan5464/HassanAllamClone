import Image from 'next/image'
import React from 'react'
import { navLinks } from '@/constants'
const Navbar = () => {



  return (
    <nav className="bg-white ">
      <div className='container flex justify-center items-center gap-2'>
        <Image width={180} height={100} src="/images/logo1.png" alt="site loge"  />
        <div>
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar
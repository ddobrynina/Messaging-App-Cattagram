import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="flex gap-4 justify-start items-center bg-[#57A8FF] text-white position-sticky">
      <FaBars className='flex-1 text-left' />  
      <div className='flex-5 text-left'><h1 className='text-[25px]'><b>Cattagram</b></h1></div>
      <FaSearch className='justify-end flex-1'/>
    </div>
  )
}

export default Header

import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

const Header = ():React.JSX.Element => {
  return (
    <div className="flex m-0 p-2 items-center bg-[#57A8FF] text-white position-sticky">
      <FaBars className='text-left flex-1' />  
      <div className='text-left flex-7'><h1 className='text-[25px]'><b>Cattagram</b></h1></div>
      <FaSearch className='flex-1'/>
    </div>
  )
}

export default Header

import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="flex gap-4 justify-center items-center bg-[#57A8FF] text-white ">
      <FaBars />  
      <h1>Cattagram</h1>
      <FaSearch />
    </div>
  )
}

export default Header

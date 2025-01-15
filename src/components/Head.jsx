import React, { useState } from 'react'
import logo from '../assets/asset56.svg'
import hamburger from '../assets/hamburger.svg'
import cross from '../assets/cross.svg'
import searchIcon from '../assets/searchIcon.svg'
import userIcon from '../assets/userLogo.png'
const Head = () => {
  const [menuIcon,setmenuIcon] = useState(hamburger)

  function changeIcon(){
    setmenuIcon(menuIcon == hamburger ? cross : hamburger)
  }
  return (
    <div className='flex justify-between mb-2  p-2 px-5 shadow-lg'>
    <div className='flex items-center'>
    <button><img src={menuIcon} alt="" onClick={changeIcon} /></button>
    <img className='h-7 mx-3 hover:cursor-pointer' src={logo} alt="" srcset=""  />
    </div>
    <div className='flex'>
      <input type="text" name="search" id="search" placeholder='Search' className='w-96 border-l-2 border-t-2 border-b-2 border-gray-400 rounded-l-full pl-2 '/>
      <button className='w-16 border-2 border-gray-400 rounded-r-full p-1 bg-gray-300 flex justify-center hover:bg-slate-400'><img src={searchIcon} alt="" className=''/></button>
    </div>
    <div className='w-36'>
      <img src={userIcon} className='h-8 hover:cursor-pointer' alt="userLogo"/>
    </div>
    </div>       
  ) 
}

export default Head
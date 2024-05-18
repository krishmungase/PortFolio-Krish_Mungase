import { React, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import Sidebar from './Sidebar';
import { MdDarkMode, MdLightMode } from "react-icons/md";
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.remove(darkMode ? "light" : "dark");
    document.body.classList.add(darkMode ? "dark" : "light");
    setClicked((prev) => !prev)
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex items-center justify-between py-5 md:py-10'>
      <div className='container mx-auto mt-5'>
        <img src="/main.svg" className='' alt="" />
      </div>


      <div className='hidden md:flex items-center justify-center space-x-5'>
        <ul className='flex items-center justify-center space-x-8'>
          <NavLink to='/' className={`cursor-pointer underlines text-[#666666] dark:text-[#999999]`}>Home</NavLink>
          <NavLink to='about' className='cursor-pointer underlines text-[#666666] dark:text-[#999999]'>About</NavLink>
          <NavLink to='techstack' className='cursor-pointer underlines text-[#666666] dark:text-[#999999]'>TechStack</NavLink>
          <NavLink to='project' className='cursor-pointer underlines text-[#666666] dark:text-[#999999]'>Project</NavLink>
          <NavLink to='contact' className='cursor-pointer underlines text-[#666666] dark:text-[#999999]'>Contact</NavLink>
        </ul>
      </div>
      <div className='flex items-center justify-center'>
        <button className='ml-8'
          onClick={toggleMode}
        >
          {
            clicked ? (<MdDarkMode className='dark:text-black size-6' />) : (<MdLightMode className='text-white size-6' />)
          }
        </button>
      </div>

      <div className='md:hidden'>
        <CiMenuFries className='size-6 cursor-pointer' onClick={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      </div>
    </div >
  )
}

export default Header;

import { React, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import Sidebar from './Sidebar';
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [clicked, setClicked] = useState(false)

  const toggleHandler = () => {
    setClicked(prev => !prev)
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex items-center justify-between py-5 md:py-10'>
      <div className='container mx-auto mt-5'>
        <img src="/main.svg" className='' alt="" />
      </div>


      <div className='hidden md:flex items-center justify-center space-x-5'>
        <ul className='flex items-center justify-center space-x-8 text-[#666666]'>
          <NavLink to='/' className={`cursor-pointer underlines`}>Home</NavLink>
          <NavLink to='about' className='cursor-pointer underlines'>About</NavLink>
          <NavLink to='techstack' className='cursor-pointer underlines'>TechStack</NavLink>
          <NavLink to='project' className='cursor-pointer underlines'>Project</NavLink>
          <NavLink to='contact' className='cursor-pointer underlines'>Contact</NavLink>
        </ul>
      </div>

      <div className='md:hidden'>
        <CiMenuFries className='size-6 cursor-pointer' onClick={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      </div>

      {/* <div className='hidden md:block flex items-center justify-center mx-5 cursor-pointer'>
        <button onClick={toggleHandler}
          className=''
        >
          {
            clicked ? (<CiLight className='size-6 transition rounded-full duration-300 ease-in-out transform p-[2px] hover:scale-110 hover:shadow-md' />) : (<CiDark className='size-6 transition duration-300 rounded-full p-[2px] ease-in-out transform hover:scale-110 hover:shadow-md' />)
          }
        </button>
      </div> */}

    </div >
  )
}

export default Header;

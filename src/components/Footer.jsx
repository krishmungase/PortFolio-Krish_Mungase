import React from 'react'
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='fixed w-[1275px] bottom-7 space-y-3 '>
            <div className='flex items-center justify-end' >
                <div className='flex items-center justify-between space-x-20'>
                    <p className='text-xs font-thin dark:text-[#B5C0D0]'>+91 12345 76896</p>
                    <p className='text-sm font-thin dark:text-[#B5C0D0]'>info@gmail.com</p>
                    <div className='flex items-center justify-center space-x-3'>
                        <Link to='https://github.com/krishmungase' target='#'>
                            <FaGithub className='size-5 dark:text-[#B5C0D0]' />
                        </Link>
                        <Link to='https://www.linkedin.com/in/krishna-mungase-5365ab27b/' target='#'>
                            <IoLogoLinkedin className='size-6 dark:text-[#B5C0D0]' />
                        </Link>
                        <Link to='https://wa.me/9021107094' target='#'>
                            <FaWhatsapp className='size-5 dark:text-[#B5C0D0]' />
                        </Link>
                    </div>
                </div>
            </div >
            <div className='border border-b border-[#CCCCCC] hidden md:block'></div>
            <div className='flex items-center justify-between px-4'>
                <div className='flex items-center justify-center space-x-5 '>
                    <ul className='flex items-center justify-center text-sm space-x-8 '>
                        <Link to={'/'} className='cursor-pointer text-[#666666] dark:text-[#999999] hidden md:block'>Home</Link>
                        <Link to={'/about'} className='cursor-pointer text-[#666666] dark:text-[#999999] hidden md:block'>About</Link>
                        <Link to={'/techstack'} className='cursor-pointer text-[#666666] dark:text-[#999999] hidden md:block'>TechStack</Link>
                        <Link to={'/project'} className='cursor-pointer text-[#666666] dark:text-[#999999] hidden md:block'>Project</Link>
                        <Link to={'/contact'} className='cursor-pointer text-[#666666] dark:text-[#999999] hidden md:block'>Contact</Link>
                    </ul>
                </div>
                <div className='text-sm dark:text-[#B5C0D0]'>
                    Design and built by <span className='gradient-text font-bold'>Krish Mungase</span> With <span className='gradient-text font-bold'>Love</span> & <span className='gradient-text font-bold'>Coffee</span>
                </div>
            </div>
        </footer >
    )
}

export default Footer

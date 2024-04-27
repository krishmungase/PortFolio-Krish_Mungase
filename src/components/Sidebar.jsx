import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div className={`fixed inset-y-0 right-0 w-64 bg-[#f5f5f5] transition duration-300 ease-in-out transform ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
            <div className="flex justify-between items-center px-4 py-6 mt-5">
                <div className="text-black font-semibold">Portfolio</div>
                <button onClick={toggle} className="text-white focus:outline-none">
                    <MdOutlineCancel className="size-6 text-black" />
                </button>
            </div>
            <nav>
                <ul className='flex flex-col'>
                    <Link to='/' className="px-4 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer">Home</Link>
                    <Link to='about' className="px-4 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer">About</Link>
                    <Link to='techstack' className="px-4 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer">Tech Stack</Link>
                    <Link to='project' className="px-4 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer">Project</Link>
                    <Link to='contact' className="px-4 py-2 text-gray-800 hover:bg-gray-300 cursor-pointer">Contact</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar

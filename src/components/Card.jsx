import React from 'react'
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const [clicked, setClicked] = useState(false)
    const isClicked = () => {
        clicked ? <span className='flex items-center gap-2'><FcLikePlaceholder className='text-xl' />Unliked !!</span> : <span className='flex items-center gap-2'><FcLike />Liked successfully !!</span>
        setClicked(prev => !prev)
    }

    const openHandler = () => {

    }
    return (
        <div className=" flex flex-col text-gray-700 bg-[#FFF] shadow-md bg-clip-border rounded-xl w-72 h-[450px] ``transition duration-300 ease-in-out transform hover:scale-110">
            <div className=" mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                    src={data.image}
                    alt="card-image" className="object-cover w-full h-96" />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-blue-gray-900">
                        {data.name}
                    </p>
                    <button className='rounded-full p-2' onClick={isClicked}>
                        {
                            clicked ? (<FcLike className='text-xl' />) : (<FcLikePlaceholder className='text-xl' />)
                        }
                    </button>
                </div>
                <p className="block  text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {data.description}
                </p>
                <p className='text-sm antialiased font-sans opacity-75 text-gray-700 mt-2 text-balance'><span className='text-sm text-black font-medium'>Tech Stack:</span> {data.stack}</p>
            </div>
            <div className="p-6 pt-0 mr-2 flex items-center justify-between">
                <div className='flex items-center justify-center space-x-1 cursor-pointer'>
                    <CiLink />
                    <button className='text-xs'>Live Preview</button>
                </div>
                <Link to={data.codeLink} target='#' className='flex items-center justify-center space-x-1 cursor-pointer'>
                    <FaGithub className='size-4' />
                    <button className='text-xs' onClick={openHandler}>View Code</button>
                </Link>
            </div>
        </div>
    )
}

export default Card

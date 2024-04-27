import React from 'react'
import stack from '../Data2'
import Stack from '../components/Stack'
import { useState } from 'react'

const Techstack = () => {
    const [data, setdata] = useState(stack);
    return (
        <div className='w-full flex flex-col items-center justify-center gap-y-10'>
            <div className='flex items-center justify-center sm:w-[500px] sm:items-center sm:justify-center md:items-start md:justify-start flex-col left-0 md:w-full'>
                <h1 className='text-[#42446E] text-left text-2xl font-extrabold md:text-3xl md:mt-5 md:mb-1 '>My Tech Stack</h1>
                <h3 className='text-sm text-[#666666]'>Technologies I've been working with recently</h3>
            </div>
            <div className='w-1/2 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:w-9/12  md:grid-cols-6 md:gap-x-0 md:gap-y-8 md:mt-20'>

                {data.map((data) =>
                    <Stack data={data} key={data.id} />
                )}


                {/* <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className='mb-1 text-sm font-bold text-[#666666]'>C</p>
                    <img src="/logos/c.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className='mb-3 text-sm font-bold text-[#666666]'>Html</p>
                    <img src="/logos/html.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className='mb-3 text-sm font-bold text-[#666666]'>Python</p>
                    <img src="/logos/python.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className='mb-3 text-sm font-bold text-[#666666]'>CSS</p>
                    <img src="/logos/css.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className='mb-3 text-sm font-bold text-[#666666]'>Node-js</p>
                    <img src="/logos/node-js.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className='mb-3 text-sm font-bold text-[#666666]'>Git</p>
                    <img src="/logos/git.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className='mb-3 text-sm font-bold text-[#666666]'>React</p>
                    <img src="/logos/react.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className=' text-sm font-bold text-[#666666]'>Tailwind</p>
                    <img src="/logos/tailwind.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className='mb-3 text-sm font-bold text-[#666666]'>Figma</p>
                    <img src="/logos/figma.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className='mb-3 text-[#666666] font-bold'>C++</p>
                    <img src="/logos/cpp.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className=' text-sm font-bold text-[#666666]'>Github</p>
                    <img src="/logos/github.svg" alt="" />
                </div>
                <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-110'>
                    <p className=' text-sm font-bold text-[#666666]'>Js</p>
                    <img src="/logos/js.svg" alt="" />
                </div> */}
            </div>
        </div >
    )
}

export default Techstack

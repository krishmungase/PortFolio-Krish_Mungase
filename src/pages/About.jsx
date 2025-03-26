import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";

const About = () => {

    const DownloadHandler = () => {
        const link = document.createElement('a');
        link.href = '/Resume_BL.pdf';
        link.download = 'Resume_BL.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='min-h-full md:w-[700px] flex flex-col justify-start space-y-7'>
            <div className='flex items-start justify-center flex-col space-y-5'>
                <h1 className='text-[#42446E] text-2xl font-extrabold md:text-3xl cursor-pointer dark:text-[#FFF2E1]'>About this site</h1>
                <p className='text-[#666666] text-sm text-justify md:text-base dark:text-[#B5C0D0]'>Welcome 👋, to my home on the internet. This site works as a portfolio, a place <br />to share code and thoughts.</p>
                <div className='border border-b-[0px] md:w-[90vh]'></div>
                <h1 className='text-[#42446E] text-2xl font-extrabold md:text-3xl cursor-pointer dark:text-[#FFF2E1]'>About Me</h1>
                <p className='text-[#666666] text-sm text-justify md:text-base dark:text-[#B5C0D0]'>Hello! I'm <strong className='font-bold gradient-text underline'>Krishna Mungase</strong> ,a first-year Computer Science Engineering student at MITAOE.
                    <br className='hidden md:block' />
                    I'm passionate about competitive programming and have solved over <span className='font-bold text-black text-sm dark:text-white'>200+</span> problems
                    <br className='hidden md:block' />
                    on platforms like LeetCode. Let's connect and explore the world of problem-solving
                    <br className='hidden md:block' />
                    together!
                </p>
                <button className='bg-[#070F2B] ml-3 text-sm px-3 py-2 rounded-md text-[#fff] transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-600'
                    onClick={DownloadHandler}
                >
                    Download CV
                </button>
            </div>
            <div className='border border-b-[0px] md:w-[90vh]'></div>
            <div className='flex flex-col space-y-7'>
                <h1 className='text-[#42446E] w-[142px] text-2xl font-extrabold md:text-3xl cursor-pointer dark:text-[#FFF2E1]'>Education</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex justify-center flex-col space-y-[3px]'>
                        <span className='text-[#666666] text-sm dark:text-[#B5C0D0]'>Bachelor in Computer Science</span>
                        <div className='flex items-center space-x-2'>
                            <FaBuilding className='text-[10px] dark:text-[#B5C0D0]' />
                            <span className='text-gray-500 text-xs dark:text-[#B5C0D0]'>MIT Academy Of Engineering</span>
                        </div>
                    </div>
                    <div className='flex justify-center flex-col space-y-2'>
                        <h1 className='text-green-900 border border-green-800 mx-6 py-[2px] text-center rounded-xl bg-green-200 text-xs font-bold'>Pursuing</h1>
                        <div className='flex items-center justify-center space-x-2'>
                            <IoCalendarNumberOutline className='text-gray-500 text-[13px] dark:text-[#B5C0D0]' />
                            <span className='text-gray-500 text-xs dark:text-[#B5C0D0]'>Aug 2023 - Aug 2027</span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex justify-center flex-col space-y-[3px]'>
                        <span className='text-[#666666] text-sm dark:text-[#B5C0D0]'>Higher Secondary Education</span>
                        <div className='flex items-center space-x-2'>
                            <FaBuilding className='text-[10px] dark:text-[#B5C0D0]' />
                            <span className='text-gray-500 text-xs dark:text-[#B5C0D0]'>MIT Jr.College, Barshi</span>
                        </div>
                    </div>
                    <div className='flex justify-center flex-col space-y-2'>
                        <h1 className='text-green-900 border border-green-800 mx-5 py-[2px] text-center rounded-xl bg-green-200 text-xs font-bold'>Passed</h1>
                        <div className='flex items-center justify-center space-x-2'>
                            <IoCalendarNumberOutline className='text-gray-500 text-[13px] dark:text-[#B5C0D0]' />
                            <span className='text-gray-500 text-xs dark:text-[#B5C0D0]'>Jun 2021 - Feb 2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-b-[0px] md:w-[90vh]'></div>
            <div>
                <h1 className='text-[#42446E] w-[242px] text-2xl font-extrabold md:text-3xl cursor-pointer dark:text-[#FFF2E1]'>Work Experience</h1>
                <div>
                    <p className='text-gray-500 text-xs font-bold dark:text-[#B5C0D0]'>NULL</p>
                </div>
            </div>
            <div className='border border-b-[0px] md:w-[90vh]'></div>
        </div>

    )
}

export default About

import React from 'react'

const Mainsec = () => {



    return (
        <div className='space-y-10 w-full h-full flex flex-col md:flex-row  items-center md:justify-center md:gap-x-20 justify-between md:space-x-10 md:space-y-20 '>
            <div className='space-y-1 md:w-[50%] md:flex md:items-start md:flex-col md:space-y-2'>
                <div className='flex font-bold md:block md:text-5xl md:space-y-3 text-3xl md:font-extrabold dark:text-[#FFEFEF]'>
                    Hii👋,
                    <br className='hidden md:block ' />

                    My Name is
                    <br className='hidden md:block' />
                </div>
                <p className='text-3xl font-bold md:block md:text-5xl md:space-y-3 gradient-text md:font-extrabold'>Krishna Mungase</p>
                <p className='text-lg font-bold text-center sm:text-lg sm:font-bold sm:text-start my-4 md:font-extrabold md:text-5xl dark:text-[#FFEFEF]'>I build things for web</p>
            </div>
            <div className='flex items-center justify-center'>
                <img src="/Kmungase.jpeg" className='aspect-square w-80 h-80 md:w-96 md:h-96 rounded-full ' alt="" />
            </div>
        </div>
    )
}
// https://i.pinimg.com/564x/b3/f8/a9/b3f8a9ffb414e67cc998f6a5ae244dcd.jpg

export default Mainsec;

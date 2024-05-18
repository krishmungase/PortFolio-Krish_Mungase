import React from 'react'
import stack from '../Data2'
import Stack from '../components/Stack'
import { useState } from 'react'

const Techstack = () => {
    const [data, setdata] = useState(stack);
    return (
        <div className='w-full flex flex-col items-center justify-center gap-y-10'>
            <div className='flex items-center justify-center sm:w-[500px] sm:items-center sm:justify-center md:items-start md:justify-start flex-col left-0 md:w-full'>
                <h1 className='text-[#42446E] text-left text-2xl font-extrabold md:text-3xl md:mt-5 md:mb-1 dark:text-[#FFF2E1]'>My Tech Stack</h1>
                <h3 className='text-sm text-[#666666] dark:text-[#B5C0D0]'>Technologies I've been working with recently</h3>
            </div>
            <div className='w-1/2 grid grid-cols-2 gap-y-10 sm:grid-cols-3 md:w-9/12  md:grid-cols-6 md:gap-x-0 md:gap-y-8 md:mt-20'>

                {data.map((data) =>
                    <Stack data={data} key={data.id} />
                )}
            </div>
        </div >
    )
}

export default Techstack

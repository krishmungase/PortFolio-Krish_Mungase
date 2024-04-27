import React, { useState } from 'react'
import Card from '../components/Card';
import newData from '../Data'

const Project = () => {
    const [data, setdata] = useState(newData);
    return (<>
        <div>
            <h1 className='text-[#42446E] text-left text-2xl font-extrabold md:text-3xl '>Projects</h1>
            <p className='text-sm text-[#666666] mt-2'>Things I've built so far</p>
        </div>
        <div className='flex items-center justify-center flex-col mb-10'>
            <div class="grid gap-y-10 md:grid-cols-2 lg:grid-cols-3 md:gap-x-20 md:gap-y-20 mt-10 w-10/12">
                {data.map((data) =>
                    <Card data={data} key={data.id} />
                )}
            </div>
        </div>
    </>
    )
}

export default Project

import React from 'react'

const Stack = ({ data }) => {
    return (
        <div className='flex items-center justify-center flex-col w-24 p-2 bg-gray-100 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105'>
            <p className='mb-3 text-sm font-bold text-[#666666]'>{data.name}</p>
            <img src={data.image} alt="" />
        </div>
    )
}

export default Stack

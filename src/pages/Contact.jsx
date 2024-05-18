import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='h-[70vh] overflow-hidden'>
            <div>
                <h1 className='text-[#42446E] text-left text-2xl font-extrabold md:text-3xl dark:text-[#FFF2E1]'>Contact</h1>
                <p className='text-sm text-[#666666] mt-2 dark:text-[#B5C0D0]'>Get In Touch  | <span className='gradient-text text-xs font-bold'>+91 9021107094</span></p>
            </div>
            <div className='h-[50vh] flex items-center justify-center'>
                <div className='text-[#42446E] flex flex-col items-center text-start text-xl font-semibold justify-start md:text-center md:text-2xl md:font-bold lg:text-4xl'>
                    <span className='dark:text-[#B5C0D0]'> For any questions please mail us:</span>
                    <Link to='mailto:mungasekrishna8@gmail.com' className='gradient-text cursor-pointer'>mungasekrishna8@gmail.com</Link>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Footer />
            </div>
        </div>
    )
}

export default Contact

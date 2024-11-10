import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/*------- Left Section --------*/}
        <div className='mb-'>
            <img className='mb-5 w-40'src={assets.logo} alt=""/>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis error, illum eaque est nihil quasi facere officiis! Ad, voluptates. Reiciendis optio suscipit quod cumque soluta tenetur nisi delectus veniam!</p>
        </div>

        {/*--------Center Section --------*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/*--------------LEFT SECTION ------------*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 8668833509</li>
                <li>imailaditya.dewangan@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* ------------ COPYRIGHT ---------*/}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ Doctorito - ALL rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

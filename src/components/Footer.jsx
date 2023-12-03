import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram, FaYoutube} from 'react-icons/fa'
import { FaHashnode } from "react-icons/fa6";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
        {/* 1st row of footer */}
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-indigo-300 py-8">
            <div className='col-span-2 p-2'>
                <h6 className="font-bold uppercase py-2">About Us</h6>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam, qui iusto iure quae sunt debitis eius at vitae quidem ipsam laudantium alias ex eaque similique commodi aperiam adipisci atque.</h3>
            </div>

            <div className='pl-8'>
                <h6 className="font-bold uppercase py-2 ">Links</h6>
                <ol>
                    <Link to="/"><li className="py-1">Home</li></Link>
                    <Link to="/about"><li className="py-1">About</li></Link>
                    <Link to="/contact"><li className="py-1">Contact Us</li></Link>
                </ol>
            </div>

            <div className="pt-2 md:pt-2">
                <p className='font-bold uppercase'>Newsletter</p>
                <p className='py-4'>Enter your e-mail and subscribe to our newsletter</p>

                <form action="" className="flex flex-col sm:flex-row">
                    <input type="email" className="w-full p-2 mr-4 rounded-md mb-2" placeholder='Enter Email'/>
                    <button className="rounded-md p-2 mb-2 bg-[#00B86E]">Subscribe</button>
                </form>
            </div>
        </div>


        {/* 2nd Row of Footer */}
        <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center" >
            <p>2023 DevToDevOps, All Rights Reserved</p>
            <div className="flex justify-between sm:w-[300px] pt-4 tesxt-2xl gap-4">
                <Link to="https://devtodevops.hashnode.dev/" target='_blank'> <FaHashnode /></Link>
                <Link to="https://github.com/Screach37/" target='_blank'><FaGithub /></Link>
                <Link to="https://www.linkedin.com/in/sharmaakshat37/" target='_blank'><FaLinkedin /></Link>
                <Link to="https://instagram.com/sharmaakshat37" target='_blank'><FaInstagram /></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
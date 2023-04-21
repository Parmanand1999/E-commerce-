import React from 'react'
import { BiMenu } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa"
import { RiContactsFill } from "react-icons/ri"
function Headersection() {
  return (
    <>
      <div className=' bg-none mx-w-[1300px] mx-auto  container flex flex-wrap p-5 flex-col md:flex-row items-center '>
        
          <div className=' text-6xl bg-none text-white '><BiMenu className='bg-none' /></div>

          {/* Dropdown menu */}
          <select id="countries" className="  h-9 pt-1 hidden  text-white md:block  p-2.5 w-[20%]  dark:placeholder-gray-400 rounded " style={{ background: "black" }}>
            <option selected >All Category</option>
            <option value="Hi" >Hindi</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        {/* Searbar */}
        <div className="flex border  mx-3 w-[40%]  bg-none rounded-l-lg rounded-r-lg   ">
          <input
            type="text"
            name='hero-field'
            id="hero-filed"
            className="block px-6 w-[90%] h-9 bg-none text-black rounded-l-lg bg-white border focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search this blog"
          />
          <button className="px-4 text-white bg-orange-500 border-l  rounded-r-lg ">
            <FaSearch className='bg-none' />
          </button>
        </div>

        {/* COUNTRY */}

        <select id="countries" className="  h-9 pt-1    text-black     block  p-2.5   dark:placeholder-gray-400 rounded" style={{ background: "white" }}>
          <option selected className='bg-white'>English</option>
          <option value="Hi" className='bg-white'>Hindi</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>


        {/* Cart */}
        
          <div className=' text-xl ml-3 bg-none '>
            <FaShoppingCart className='bg-none text-white' />
          </div><span className='bg-none  ml-2 text-white'>CART</span>
          <div className=' text-xl ml-2 bg-none '>
            <RiContactsFill className='bg-none text-white' />
          </div><span className='bg-none  ml-2 text-white'>CART</span>

        
      </div>
    </>
  )
}

export default Headersection;
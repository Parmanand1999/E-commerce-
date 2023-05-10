import React from 'react'
import { AiOutlineLeft } from "react-icons/ai"
import { BsChevronRight } from "react-icons/bs"
import { useNavigate } from 'react-router'
function Carousel() {
   const navigate =useNavigate()
    return (
        <>

            <div

                className="block max-w-full text-center mx-auto p-10 text-whit ease-in-out   "
            >
                <h1 className="mb-2 text-5xl  font-bold tracking-tight text-white">
                    GET START
                </h1>
                <button className='float-left bg-white rounded-3xl p-4 text-x font-bold'> <AiOutlineLeft /></button>
                <button className='float-right bg-white rounded-3xl p-4 text-x font-bold'> <BsChevronRight /></button>
                <h1 className="mb-2 mt-5 text-5xl font-bold tracking-tight text-white">
                    YOUR FAVRIOT SHOPING
                </h1>
                <button className='text-x text-white font-bold p-3 px-5 mt-5 border rounded-lg bg-black'onClick={()=>navigate('/Cartitem')}>BUY NOW</button>
            </div>


        </>
    )
}

export default Carousel
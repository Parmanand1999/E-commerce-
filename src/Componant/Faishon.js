import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { buyitem } from '../features/counterSlice';


function Faishon() {
    const [post, setPost] = useState([])
    const dispach = useDispatch()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, [setPost])
    console.log(post);
    return (
        <>
            <h1 className=' mx-auto text-center p-10 text-3xl font-bold'>Man & Woman Fashion</h1>

            <div className='grid w-[100%] h-80  mx-auto  md:grid-cols-4  gap-5' >
                {post.map((item, index) =>
                    <div className=' shadow-2xl relative text-white' key={index}>
                        <div className='text-black'>{item.category}</div>
                        <img src={item.image} />
                        <div className='text-black absolute  bottom-10'>Price:{item.price}</div>
                        <button className='bg-[#38bdf8] rounded p-2 px-4 absolute inset-x-0 bottom-0' onClick={() => dispach(buyitem(index))}>Buy </button>
                    </div>


                )}
            </div>


        </>
    )
}

export default Faishon
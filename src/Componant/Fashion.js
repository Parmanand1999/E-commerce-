import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { buyitem } from '../features/counterSlice';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Fashion() {
    const [post, setPost] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then((response) => {
            setPost(response.data);

        });
    }, [])
    const Buyhandler = (id) => {
        // dispatch(buyitem(id))
        navigate(`/fashionChild/${id}`);
    }
    // console.log(post, "posts::::::: ");
    return (
        <>
            <h1 className=' mx-auto text-center p-10 text-3xl font-bold'>Man & Woman Fashion</h1>

            <div className='grid w-[100%] h-80  mx-auto   md:grid-cols-4 sm:grid-cols-2 gap-3' >
                {post.map((item, index) =>
                    <div className=' shadow-2xl w-[70] h-80 border bg-white relative text-white' key={index}>
                        <img src={item.image} className='w-[200px] h-[200px]' />
                        <div className='text-black absolute  bottom-10'>Price:{item.price} $</div>
                        <div className='text-black'><h6 className='text-center  absolute  bottom-13'>{item.title}</h6></div>
                        <button className='bg-[#38bdf8] rounded p-2 px-4 absolute inset-x-0 bottom-0' onClick={() => Buyhandler(item.id)}>About product</button>
                    </div>


                )}
            </div>


        </>
    )
}

export default Fashion
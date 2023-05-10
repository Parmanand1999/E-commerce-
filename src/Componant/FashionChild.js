import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addToCarthandler, buyitem } from '../features/counterSlice';

function FashionChild() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch()


    useEffect(() => {
        try {
            axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
                setData(response.data);
            });

        } catch (error) {
            console.log(error)
        }


    }, [id])


    // const handleCartItems = (item) => {
    //     const ids = cartitems?.map((i) => {
    //         return i.id
    //     })

    //     if (cartitems.length && ids.includes(item.id)) {
    //         dispatch(Increment(item.id))
    //     } else {

    //         dispatch(addToCarthandler({ ...data, quantity: 1 }))
    //     }
    // }
    const Handleclick = () => {

        navigate(`/Cartitem`)

        dispatch(addToCarthandler({ ...data, quantity: 1 }))
    }
    const buyitemhandler = () => {
        dispatch(buyitem({ ...data }))
        navigate('/Stripepayment')
    }
    return (
        <>
            {
                <div className="flex flex-col max-w-[1300px]  h-[100%] mr-[5%] ml-[5%] drop-shadow-lg mt-3 rounded-lg bg-white dark:bg-neutral-700  md:flex-row">
                    <div className="rounded-t-lg md:rounded-none w-[50%] mt-5 ml-2  md:rounded-l-">
                        <img
                            className='h-[100%] '
                            src={data?.image}
                            alt="" />
                        <div className='flex sm:flex-row'>
                            <button className='bg-yellow-500 text-sm hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded' onClick={Handleclick}
                            > Add to Cart</button>
                            <button className='bg-orange-600 text-sm  hover:bg-blue-700 ml-3 text-white font-bold  px-3 rounded' onClick={buyitemhandler}>Buy Now</button>
                        </div>
                    </div>

                    <div className="flex flex-col mt-5 ml-2 mb-5 w-[100%] mr-3">
                        <h3 className="mb-2 text-2xl font-bold text-neutral-800 dark:text-neutral-50">
                            {data?.category}
                        </h3>
                        <h4 className='font-bold'>{data?.title}</h4>
                        <p className="mb-4 text-base text-neutral-600  dark:text-neutral-200">
                            Details:{data?.description}
                        </p>
                        <p>Rating:{data?.rating?.rate}</p>
                        <p>Price:{data?.price}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-300">
                            Last updated 3 mins ago
                        </p>
                    </div>
                    <button className='border-2 rounded-md  bg-orange-600 h-10 mt-5 bottom-0 fixed inset-x-0' onClick={() => navigate('/')}>Continue Shoping</button>
                </div>
            }
        </>
    )
}

export default FashionChild
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, removehandler, decrement } from '../features/counterSlice'
function Cartitem() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [cartItemsquantity, setCartItemsquantity] = useState(0)
    const [price, setprice] = useState(0)


    const cartItems = useSelector(state => state.counterSlice.cartItems)
    // console.log(cartItems.length,"2345678");

    useEffect(() => {
        const price = cartItems.reduce((accu, item) => {
            return accu = accu + item.price * item.quantity
        }, 0)
        setprice(price)

        setCartItemsquantity(cartItems.length)
    }, [cartItems])



    return (
        <>

            <div>
                <h1 className='text-center font-bold text-2xl'>Add to Cart item</h1>
                <div className='flex flex-col max-w-[100%]  mt-2 rounded-lg bg-white dark:bg-neutral-700  border-2 border-black"'>
                    <div className='flex flex-col w-[30%] h-30 bg-white'>
                        <div>Total Quantity
                            <h2 className='float-right mx-10'>{cartItemsquantity}</h2>
                        </div>
                        <div>Total amount
                            <h2 className='float-right mx-10'>{price}</h2>
                        </div>
                        <button className='bg-blue-600 rounded-md text-white cursor-pointer' onClick={() => navigate('/userDetails')}>PLACE ORDER</button>
                    </div>
                    {cartItems?.map((selector,index) =>
                        <div className="flex flex-col max-w-[100%]  h-[20%] mt-2 rounded-lg bg-white dark:bg-neutral-700  md:flex-row mr-0 border-2 border-black" key={index}>
                            <div className="rounded-t-lg md:rounded-nonem w-[15%] h-[10%]  md:rounded-l-lg" > <img

                                src={selector?.image}
                                alt=""
                            />

                            </div>

                            <div className="flex flex-col w-[50%] justify-start p-3 ">
                                <h3 className="mb-2 text-2xl font-bold text-neutral-800 dark:text-neutral-50">
                                    {selector?.category}
                                </h3>
                                <h4 className='font-bold'>{selector?.title}</h4>

                                <p>Rating:{selector?.rating?.rate}</p>
                                <p>Price:{selector?.price * selector?.quantity}</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                    Last updated 3 mins ago
                                </p>

                            </div>
                            <div className='flex space-x-16 mt-16 flex-col sm:flex-row  '>
                                <span className=' text-2xl ml-16' onClick={() => dispatch(decrement(selector?.id))}>-</span>
                                <h3 className='text-2xl'>{selector?.quantity}</h3><span className='font-bold text-2xl' onClick={() => dispatch(Increment(selector?.id))}>+ </span>
                                <h3 className='mr-5 ' onClick={() => dispatch(removehandler(selector?.id))}>REMOVE</h3>
                            </div>

                        </div>
                    )}




                </div>
            </div>
            <br/>
            <button className='border-2 rounded-md  bg-orange-600 h-10 mt-5 bottom-0 fixed inset-x-0' onClick={() => navigate('/')}>Continue Shoping</button>



        </>
    )
}

export default Cartitem
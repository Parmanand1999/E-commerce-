import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { TbLoader } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()
    const [price, setprice] = useState(0)
    const [buyitem, setBuyitem] = useState(0)
    const [isLoader, setIsloader] = useState(false)

    const totalprice = useSelector(state => state.counterSlice.cartItems)
    const buyitemprice = useSelector(state => state.counterSlice.buyitemprice[0])
    // console.log(buyitem, "666666");
    useEffect(() => {

        setBuyitem(buyitemprice)
    }, [buyitem])
    useEffect(() => {
        const price = totalprice.reduce((accu, item) => {
            return accu = accu + item.price * item.quantity
        }, 0)
        setprice(price)
        // console.log(price, "pricepriceprieve");

    }, [price])




    const handleSubmit = async (event) => {

        event.preventDefault();
        if (!stripe || !elements) {

            return;
        } else {

            setIsloader(true)
            await axios.post('https://6fdd-119-82-84-98.ngrok-free.app/payment-intent', {
                amount: Math.floor((price || buyitem) * 100),
                currency: 'inr'
            })
                .then((response) => {
                    console.log(response, 'userResponse')
                    const paymentIntentSecret = response.data.client_secret
                    console.log(paymentIntentSecret, '.......paymentSecret')
                    if (!paymentIntentSecret) {
                        console.log("somthing went worng")
                    } else {

                        stripe.confirmCardPayment(paymentIntentSecret, {
                            payment_method: {
                                card: elements.getElement(CardNumberElement),

                                billing_details: {
                                    name: "asdfagasdfg",

                                },
                            },
                        }).then(function (result) {
                            console.log(result, "rrrrrrrrrrresult")


                            if (result?.paymentIntent && result?.paymentIntent.status === 'succeeded') {
                                // setIsloader(false)
                                alert("payment successfull")

                            } else if (result.error.message == "Your card number is incomplete.") {
                                alert("Your card number is incomplete.")
                                console.log(result.error.message, "eror");
                            }

                        }
                        )
                        // alert("succed")
                    }
                })
                .catch(function (error) {
                    console.log(error.message, "eeeeeeeeeerror");

                });
                // setIsloader(false)
            
        }



    }


    return (
        <>
            {/* {isLoader?<TbLoader/>: */}
            <form onSubmit={handleSubmit} className='border  w-[40%] m-auto mt-[10%] shadow-lg b '>
                <div className='ml-5 mr-5 '>
                    <label>Card Number</label>
                    <CardNumberElement className='border p-2' />
                    <label>Expiry Date</label>
                    <CardExpiryElement className='border p-2' />
                    <label>CVC Number</label>
                    < CardCvcElement className='border p-2' />
                    <div className='flex'>

                        <span>Rs:</span> <h2 className='border p-2 w-full'>{price || buyitem}</h2>
                    </div>


                    <button type='submit' disabled={!stripe} className='border rounded-md text-white bg-blue-600 center w-20' >Pay</button>


                </div>
            </form>
            {/* //  } */}
            <button className='border-2 rounded-md border-black bg-orange-600 h-10 mt-5 bottom-0 fixed inset-x-0' onClick={() => navigate('/')}>Continue Shoping</button>

        </>
    )
};

export default CheckoutForm;
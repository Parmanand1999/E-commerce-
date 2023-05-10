import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deliveritem } from '../features/counterSlice';
import { useNavigate } from 'react-router';

function UserDetails() {
    const [userdetails, setUserDetails] = useState({
        name: "",
        email: "",
        addresh: "",
    })
    const dispatch = useDispatch()
    const [userdata, setUserData] = useState([])
    const navigate = useNavigate()
    // console.log(userdata,"23456789");
    function handeldeliver() {
        if (userdetails.name.length > 5 || userdetails.email.length || userdetails.addresh.length > 10) {
            setUserData((p => [...p, userdetails]))
            const latestData = [...userdata, userdetails]
            // console.log(latestData);
            dispatch(deliveritem({ ...latestData }))
            setUserDetails({
                name: "",
                email: "",
                addresh: "",
            })
            navigate('/stripepayment')
        } else {
            console.log("fill the full details");
        }
    }


    return (
        <div className=" bg-gray-100 h-screen ">
            <div className="max-w-xl p-2 mx-auto  bg-white rounded-md shadow-lg">
                <div className="text-center">
                    <h1 className="my-3 text-2xl font-semibold text-gray-700"> Deliver Address</h1>
                    <p className="text-gray-400">
                        Fill up the form below to Deliver items.
                    </p>
                </div>
                <div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-2">
                            <label htmlFor="name" className="block  text-sm text-gray-600">
                                Full Name
                            </label>
                            <input
                                value={userdetails.name}
                                onChange={(e) => setUserDetails(p => ({
                                    ...p, name: e.target.value
                                }))}
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                required
                                className="w-full px-3  placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                                Email Address
                            </label>
                            <input
                                value={userdetails.email}
                                onChange={(e) => setUserDetails(p => ({ ...p, email: e.target.value }))}
                                type="email"
                                name="email"
                                placeholder="you@email.com"
                                required
                                className="w-full px-3  placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="message" className="block mb-2 text-sm text-gray-600">
                                Full Address
                            </label>
                            <textarea
                                rows={3}
                                value={userdetails.addresh}
                                onChange={(e => setUserDetails(p => ({ ...p, addresh: e.target.value })))}
                                name="message"
                                placeholder="Your Addresh"
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                required

                            />
                        </div>
                        <div className="mb-2">

                            <button
                                type="submit"
                                onClick={handeldeliver}
                                className="w-full px-2 py-2 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
                            >
                                Deliver Here
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UserDetails
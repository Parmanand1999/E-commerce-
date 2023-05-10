import React from 'react'
import { Route, Routes } from "react-router-dom"
import Container from './Container'
import FashionChild from '../Componant/FashionChild'
import Cartitem from '../Componant/Cartitem'
import Stripepayment from '../Stripe/Stripepayment'
import UserDetails from '../Stripe/UserDetails'

const AllRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Container />} />
            <Route path='/fashionChild' element={<FashionChild />} />
            <Route path='/fashionChild/:id' element={<FashionChild />} />
            <Route path='/Cartitem' element={<Cartitem />} />
            <Route path='/stripepayment' element={<Stripepayment />} />
            <Route path='/userDetails' element={<UserDetails/> } />
        </Routes>
    )
}

export default AllRoutes
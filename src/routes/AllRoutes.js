import React from 'react'
import { Route, Routes } from "react-router-dom"
import Container from './Container'
import FashionChild from '../Componant/FashionChild'
import Cartitem from '../Componant/Cartitem'

const AllRoutes = () => {
    
    return (
        <Routes>
            <Route path='/' element={<Container />} />
            <Route path='/fashionChild' element={<FashionChild />} />
            <Route path='/fashionChild/:id' element={<FashionChild />} />
            <Route path='/Cartitem' element={<Cartitem />} />
        </Routes>
    )
}

export default AllRoutes
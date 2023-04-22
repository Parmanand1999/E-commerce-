import React from 'react'
import { Route, Routes } from "react-router-dom"
import Container from './Container'
import FashionChild from '../Componant/FashionChild'

const AllRoutes = () => {
    return (
        <div>
            <Routes>

                <Route path='/' element={<Container />} />
                <Route path='/fashionChild' element={<FashionChild />} />
                <Route path='/fashionChild/:id' element={<FashionChild />} />

            </Routes>

        </div>
    )
}

export default AllRoutes

import React from 'react';
import './app.css';
import Navbar from './Componant/Navbar';
import Headersection from './Componant/Headersection';
import Carousel from './Componant/Carousel';
import Faishon from './Componant/Faishon';
import FaishonChild from './Componant/FaishonChild';

function App() {
    return <>
        <div className="bg-[url('./images/e-combanner.png')] bg-no-repeat bg-cover bg-center ">

            <Navbar />
            <Headersection />
            <Carousel/>
        </div>
        <FaishonChild/>
        <Faishon />
    </>
}

export default App;
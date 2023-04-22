import React from "react";
import Navbar from "../Componant/Navbar";
import Headersection from "../Componant/Headersection";
import Carousel from "../Componant/Carousel";
import Fashion from "../Componant/Fashion";

const Container = () => {
    return (

        <>
            <div className="bg-[url('./images/e-combanner.png')] bg-no-repeat bg-cover bg-center ">

                <Navbar />
                <Headersection />
                <Carousel />
                <Fashion />

            </div>

        </>
    );
};

export default Container;
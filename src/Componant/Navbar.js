import React from 'react';

function Navbar() {
    return (
        <>
            <header className="text-white hidden lg:block bg-black body-font" style={{ background: "black" }}>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" style={{ background: "black" }}>

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" style={{ background: "black" }}>
                        <a className="mr-5 hover:text-red-500" style={{ background: "black" }}>Best Sellers</a>
                        <a className="mr-5 hover:text-red-500" style={{ background: "black" }}>Gift Ideas</a>
                        <a className="mr-5 hover:text-red-500" style={{ background: "black" }}>New Releases</a>
                        <a className="mr-5 hover:text-red-500" style={{ background: "black" }}>Today's Deals</a>
                        <a className="mr-5 hover:text-red-500" style={{ background: "black" }}>Customer Service</a>
                    </nav>

                </div>
            </header>
            <div className="  mx-w-[1200%] bg-none p-5 items-center ">
                <label className="text-5xl text-white flex justify-center items-center bg-none font-bold">Eflyer</label>
            </div>



        </>
    )
}

export default Navbar
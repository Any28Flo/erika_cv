import React, {useState} from "react";

const NavBar = () =>{
    const analinFlores_icon= require("./../images/iconAnalin.png");
    const [isOpen, setisOpen] = useState(false);

    return(
        <nav id="header" className=" w-full z-30 top-0 text-white bg-white ">

            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 ">

                <div className="pl-4 flex items-center">
                    <img
                        alt="..."
                        src={analinFlores_icon}
                        className="shadow-lg rounded-full w-16 mx-auto h-16 "
                        style={{ maxWidth: "120px" }}
                    />
                </div>

                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle" className="flex items-center p-1 text-orange-800 hover:text-gray-900" onClick={ e => setisOpen( !isOpen)}>
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div
                    className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-black  no-underline hover:bg-brandingYellow" href="aboutme">About me</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline  hover:bg-brandingYellow py-2 px-4"
                               href="#">Proyects</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline hover:bg-brandingYellow py-2 px-4"
                               href="#">Skills</a>
                        </li>
                    </ul>
                    <button id="navAction"
                            className="mx-auto lg:mx-0 hover:bg-brandingYellow bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75">Get in touch
                    </button>
                </div>
                <div className={`w-full flex-grow ${isOpen ? 'block' : 'hidden'}`}>

                    <a className="block mt-1 py-1 px-3 font-semibold rounded text-black  hover:bg-brandingYellow" >About me</a>
                    <a className="block mt-1 py-1 px-3 font-semibold rounded text-black  hover:bg-brandingYellow" >Proyects</a>
                    <a className="block mt-1 py-1 px-3 font-semibold rounded text-black  hover:bg-brandingYellow" >Skills</a>

                </div>
            </div>

            <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/>
        </nav>


    )
};
export default NavBar;
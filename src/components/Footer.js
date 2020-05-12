import React from "react"

const Footer = () =>{
    return(


        <footer className="bg-white">
            <div className="container mx-auto  px-8">

                <div className="w-full flex flex-col md:flex-row py-6 justify-center text-center">



                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Github</p>

                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Linkedin</p>

                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Gitlab</p>

                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Stack Overflow</p>

                    </div>
                </div>
                <div className="w-full flex text-center flex-col md:flex-row py-6 justify-center text-center">
                    <p className="text-gray-500 md:mb-6 text-center">Made with love <span role="img" aria-label="heart">&#128153;</span> by Ironhacker  <span  role="img" aria-label="girl">&#128105;</span> Analin Flores <span  role="img" aria-label="fire">&#128293;</span></p>
                </div>
            </div>



        </footer>

    )
};

export default Footer;
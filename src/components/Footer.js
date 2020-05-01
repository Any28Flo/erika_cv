import React from "react"

const Footer = () =>{
    return(


        <footer className="bg-white">
            <div className="container mx-auto  px-8">

                <div className="w-full flex flex-col md:flex-row py-6">



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
            </div>



        </footer>

    )
};

export default Footer;
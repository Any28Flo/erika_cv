import React from "react";
import Skill from "./Skill";

const Contact = () =>{
    const telephone_icon = require("./../images/phone.png");
    const mail_icon = require("./../images/mail.png");
    return(
        <section className="pt-20 pb-48 bg-white " id="getInTouch">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4 ">
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Get In Touch</h1>


                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mb-12 ">
                    <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4 h-16 ">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={telephone_icon}
                                className="shadow-lg rounded-full w-16 mx-auto h-16 "
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="mt-1 text-xl text-gray-500  font-semibold">
                                    5583375149
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4 h-16 ">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={mail_icon}
                                className="shadow-lg rounded-full w-16 mx-auto h-16 "
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="mt-1 text-xl text-gray-500  font-semibold">
                                    foglzerika@gmail.com
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
export default Contact;
import React from "react";

const TechSkills = () =>{
    const react_icon= require("./../images/react.svg");
    const mongo_icon = require("./../images/mongodb.svg");
    const expres_icon = require("./../images/expressjs.svg");
    const node_icon = require("./../images/node.svg");
    return(
        <section className="pt-20 pb-48 bg-white ">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Skills</h1>


                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={mongo_icon}
                                className="shadow-lg rounded-full max-w-full mx-auto"
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="mt-1 text-xl text-gray-500 uppercase font-semibold">
                                    Mongo DB
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={expres_icon}
                                className="shadow-lg rounded-full max-w-full mx-auto"
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="mt-1 text-xl text-gray-500 uppercase font-semibold">
                                    Express
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={react_icon}
                                className="shadow-lg rounded-full max-w-full mx-auto"
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="mt-1 text-xl text-gray-500 uppercase font-semibold">
                                    REACT
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={node_icon}
                                className="shadow-lg rounded-full max-w-full mx-auto"
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="mt-1 text-xl text-gray-500 uppercase font-semibold">
                                    NODE
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
};

export default TechSkills;
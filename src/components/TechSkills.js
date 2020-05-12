import React from "react";
import Skill from "./Skill";
const TechSkills = () =>{
    const react_icon= require("./../images/react.svg");
    const mongo_icon = require("./../images/mongodb.svg");
    const expres_icon = require("./../images/expressjs.svg");
    const node_icon = require("./../images/node.svg");
    return(
        <section className="pt-20 pb-48 bg-white ">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4 ">
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Skills</h1>


                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <Skill img={mongo_icon} skill={"Mongo DB"}/>
                    <Skill img={expres_icon} skill={"Express"}/>
                    <Skill img={react_icon} skill={"React"}/>
                    <Skill img={node_icon} skill={"Node"}/>
                </div>

            </div>
        </section>

    )
};

export default TechSkills;
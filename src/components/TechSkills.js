import React from "react";
import Skill from "./Skill";
const TechSkills = () =>{
    const react_icon= require("./../images/react.svg");
    const mongo_icon = require("./../images/mongodb.svg");
    const expres_icon = require("./../images/expressjs.svg");
    const node_icon = require("./../images/node.svg");
    const git_icon = require("./../images/git.svg");
    const html_icon = require("./../images/html5.svg");
    const boostrap_icon = require("./../images/boostrap.svg");
    const css3_icon = require("./../images/css3.svg");
    const github_icon = require("./../images/github.svg");
    const heroku_icon = require("./../images/heroku.svg");
    const js_icon = require("./../images/javascript.svg");
    const gitlab_icon = require("./../images/gitlab.svg");
    return(
        <section className="pt-20 pb-48 bg-white " id="skills">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4 ">
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Skills</h1>


                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mb-12 ">
                    <Skill img={mongo_icon} skill={"Mongo DB"}/>
                    <Skill img={expres_icon} skill={"Express"}/>
                    <Skill img={react_icon} skill={"React"}/>
                    <Skill img={node_icon} skill={"Node"}/>
                </div>
                <div className="flex flex-wrap pt-8 mb-12">
                    <Skill img={boostrap_icon} skill={"bootstrap"}/>
                    <Skill img={css3_icon} skill={"css3"}/>
                    <Skill img={git_icon} skill={"Git"}/>
                    <Skill img={github_icon} skill={"Github"}/>

                </div>
                <div className="flex flex-wrap pt-8">
                    <Skill img={gitlab_icon} skill={"Gitlab"}/>

                    <Skill img={heroku_icon} skill={"heroku"}/>
                    <Skill img={html_icon} skill={"HTML5"}/>
                    <Skill img={js_icon} skill={"Javascript"}/>

                </div>

            </div>
        </section>

    )
};

export default TechSkills;
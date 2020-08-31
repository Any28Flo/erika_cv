import React from "react"
import { Link } from 'react-router-dom'

const AboutMe  = () =>{
    const profile_image = require('./../images/profile_picture.jpg');
    const linkedin_icon = require('./../images/linkedin.svg');
    const stack_icon = require('./../images/social-media.svg');
    const github_icon = require('./../images/github_white.svg');
    const gitlab = require('./../images/gitlab-icon-1-color-white-rgb.svg');
    return (
        <div className="pt-24" id="aboutMe">

            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <h1 className="my-4 text-5xl font-bold leading-tight">Hi. I'm Erika Flores</h1>
                    <p className="leading-normal text-2xl mb-8">I'm a software engineer and full stack developer from Mexico city. Please take a look around.</p>

                    <div
                        className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between ">
                        <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/analin-flores" data-tippy-content="@linkedin_handle">
                            <img
                                alt="..."
                                src={linkedin_icon}
                                className=" w-16 mx-auto h-5"
                                style={{ maxWidth: "120px" }}
                            />
                        </a>
                        <a className="link" target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/8626985/analin-flores" data-tippy-content="@stackover_handle">
                            <img
                                alt="..."
                                src={stack_icon}
                                className=" rounded-full w-16 mx-auto h-5"
                                style={{ maxWidth: "120px" }}
                            />
                        </a>

                        <a className="link" target="_blank"  rel="noopener noreferrer" href="https://github.com/Any28Flo" data-tippy-content="@github_handle">
                            <img
                                alt="..."
                                src={github_icon}
                                className="w-16 mx-auto h-5"
                                style={{ maxWidth: "120px" }}
                            />
                        </a>
                        <a className="link" target="_blank"  rel="noopener noreferrer" href="https://gitlab.com/AnalinFlores" data-tippy-content="@gitlab_handle">
                            <img
                                alt="..."
                                src={gitlab}
                                className="w-16 mx-auto h-8"
                                style={{ maxWidth: "120px" }}
                            />
                        </a>




                    </div>
                    <div
                        className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between ">
                        <a className="link mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg" target="_blank"  rel="noopener noreferrer" href="https://drive.google.com/file/d/1kH-fdSYL_2V33BxbgsqSAbyEMfMf2HZO/view?usp=sharing" data-tippy-content="@gitlab_handle">
                            Resume
                        </a>

                    </div>



                </div>
                <div className="w-full md:w-3/5 py-6 text-center">

                    <img className="rounded shadow-2xl w-full md:w-4/5 z-50" src={profile_image} alt="hero-image" />
                </div>

            </div>

        </div>

    )
};

export default AboutMe;
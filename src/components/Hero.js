import React from "react"
import Particles from "react-particles-js";

const Hero = () =>{
    return(
        <div className="pt-15" >


            <section className="bg-brandingYellow border-b py-8 ">
                <div className="container mx-auto  h-screen">

                    <Particles
                        height="100vh"
                        params={{
                            particles: {
                                number: {
                                    value: 200,
                                    density: {
                                        enable: true,
                                        value_area: 1000,
                                    }
                                },
                                color: {
                                    "value": "#ffffff"
                                },
                                size: {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                            },
                        }}

                    />
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white pt-48 md:pt-56">Erika Flores</h1>
                        <p className="w-full my-2 text-1xl italic font-bold leading-tight text-center text-white ">Software engineer <br/> &<br/> Full Stack developer</p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Hero;
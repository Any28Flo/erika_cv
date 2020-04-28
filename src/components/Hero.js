import React from "react"
import ParticlesDiv from "./Particles";

const Hero = () =>{
    return(
        <div className="container mx-auto"
        >
            <ParticlesDiv />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
            >
                <div className="bg-auto h-auto text-white my-10 py-24 px-10">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold">
                            Erika Flores
                        </h1>
                        <p>Ingeniero en softare & Full stack developer</p>

                    </div>


                </div>

            </div>
        </div>
    )
};

export default Hero;
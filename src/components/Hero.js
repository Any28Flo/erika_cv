import React from "react"
import ParticlesDiv from "./Particles";

const Hero = () =>{
    return(
        <div className="hero-image bg-auto h-auto"
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
                <div className="text-white my-10 py-20  content-center">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold">
                            Erika Flores
                        </h1>
                        <p className="text-2xl mb-10">Ingeniero en softare<br/> & <br />Full stack developer</p>
                        <button className="bg-white py-4 px-8 text-gray-700 font-bold rounded">
                            Ver CV

                        </button>

                    </div>


                </div>

            </div>
        </div>
    )
};

export default Hero;
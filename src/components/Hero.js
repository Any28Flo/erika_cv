import React from "react"
import Particles from 'react-particles-js';

const Hero = () =>{
    return(
        <div className="hero sm:text-center">
            By Erika Flores
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 20
                        },
                        "size": {
                            "value": 9
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse",
                                "value_are": 1000

                            }
                        }
                    }
                }} />

        </div>
    )
};

export default Hero;
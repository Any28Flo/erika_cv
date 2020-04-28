import React from "react";
import Particles from 'react-particles-js';

const ParticlesDiv  = () =>{
   return(
       <div
           style={{
               position: "absolute",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%"
           }}
       >

           <Particles
               params={{
                   particles: {
                       number: {
                           value: 200,
                           density: {
                               enable: true,
                               value_area: 1000,
                           }
                       },
                   },
               }}
           />
       </div>
   )
};

export default ParticlesDiv;

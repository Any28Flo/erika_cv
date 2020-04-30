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
       </div>
   )
};

export default ParticlesDiv;

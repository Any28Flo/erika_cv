import React, {useState} from "react";

const Button = () =>{
    const [counter , setCounter] = useState(0);
    return(
        <div>
            <button>{counter}</button>
        </div>
    )
};

export default Button;
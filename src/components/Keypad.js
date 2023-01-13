// Code Keypad Component Here
import React from "react";

function Keypad (){

    function handlePassword(e){
       e.preventDefault()

       console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={handlePassword}></input>
        </div>
    )
}

export default Keypad;
import React from 'react'

function Button(props) {
    function changeValue(){
        if(props.inc===true){
            props.setCount((count)=>{
                return count+1;
            })
        }
        else{
            props.setCount((count)=>{
                return count-1;
            })
        }
    }
    return (
        <button onClick={changeValue}>
            {props.inc===true?
            "INCREMENT":"DECREMENT"}
        </button>
    )
}

export default Button

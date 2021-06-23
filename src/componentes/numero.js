import React from 'react'



export default function Numero(props){

    return (
        <>
        <p>Numero {props.num}</p>

        <button onClick={()=>props.setNum(props.num+10)}>Soma</button>
        </>
    )
}
import React, {useState} from 'react'
import Normal from './imgs/Superman-Normal.png'
import Lutando from './imgs/Superman-Lutando-PNG.png'



export default function Superman(props) {


  


  return (
    <>
    
      <img style={{width:'500px', height:'600px'}} src={props.ligado?Normal:Lutando} />
      <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?"Verd":"False"}</button>

    </>
);
}

import React, {useState} from 'react'

import Topo from './componentes/header';
import Corpo from './componentes/corpo';
import Relogio from './componentes/Relogio';
import Numero from './componentes/numero'
import Evento from './componentes/superman';
import './App.css'

export default function App() {

  const herois = [
    
      {Heroi:'Superman', Nome:'Clark'},
      {Heroi:'Batman', Nome:'Bruce'}
      ]

  const listaHerois = herois.map(

    (h, i)=>

      <p key={i}>chave {i} - heroi {h.Heroi}, Nome {h.Nome}</p>

  )

  const [num, setNum] = useState(10)
  const [ligado, setLigado] = useState(false)
  const [log, setLog] = useState(true)

  const comprimento = () => {

    const hora= new Date().getHours()

    if(hora >= 0 && hora < 13){

      return <p>Bom dia!</p>

    }else if(hora >= 13 && hora < 18){

      return <p>Boa Tarde!</p>


    }else{

      
      return <p>Boa noite!</p>


    }
  }

  return (

    <>
    <section className='caixa'>

      <Topo />
      <Relogio />
      <p>O numero é: {num}</p>
      <Numero num={num} setNum={setNum}/>
      {comprimento()}
      {listaHerois}
      <p>{log?'Usuario não logado':'Usuario Logado'}</p>
      <button onClick={()=>setLog(!log)}>{log?'logoff':'login'}</button><br/>
      <Evento ligado={ligado} setLigado={setLigado}/>
      <Corpo />
    </section>
    </>

);
}
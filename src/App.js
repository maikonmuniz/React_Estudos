
import React, {useState} from 'react'

import Topo from './componentes/header';
import Corpo from './componentes/corpo';
import Relogio from './componentes/Relogio';
import Numero from './componentes/numero'
import Evento from './componentes/superman';
import './App.css'


export default function App() {


  const [num, setNum] = useState(10)
  const [ligado, setLigado] = useState(true)

  return (
    <>
    <section className='caixa'>


      <Topo />
      <Relogio />
      <p>O numero é: {num} </p>
      <Numero num={num} setNum={setNum}/>
      <Evento ligado={ligado} setLigado={setLigado}/>
      <Corpo />

    </section>
    </>
);
}

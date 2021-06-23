import React from 'react'



export default function Dados(props){

    const n1 = 10
    const n2 = 23

    return(

        <section>

            <p>Canal: {props.canal}</p>
            <p>YouTube: {props.youtube}</p>
            <p>Cursos: {props.cursos}</p>
            <p>{'A soma de ' + n1 + '+' + n2 + ' é ' + props.somar(n1, n2)}</p>

        </section>

    );
}

import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


export default function App(props){
    return (
        <div>
            <Fragmento/>
            <ComParametro titulo='Situação do aluno' aluno='Rafael' nota={6}></ComParametro>
            <ComParametro 
                titulo='Situação do aluno' 
                aluno='Herique' 
                nota={10}/>
            <Primeiro></Primeiro>
        </div>
    )
}
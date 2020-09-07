import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


export default (props) => {
    return (
        <div id='app'>
            <h1> Fundamentos React </h1>
            <Aleatorio min={1} max={10} />
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
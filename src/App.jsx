import './App.css'
import React from 'react'


import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default (props) => {
    return (
        <div className='App'>
            <h1> Fundamentos React </h1>
            
            <div  className='Cards'>
                <Card titulo='#04 - Desafio aleatorio'>
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo='#03 - Fragmento'>
                    <Fragmento/>
                </Card>
                <Card titulo='#02 - Com parâmetro'>
                    <ComParametro 
                        titulo='Situação do aluno' 
                        aluno='Herique' 
                        nota={10}/>
                </Card>
                <Card titulo='#01 - Primeiro Componente'>
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}
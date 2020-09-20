import './App.css'
import React from 'react'


import Card from './components/layout/Card'
import First from './components/basic/First'
import Fragment from './components/basic/Fragment'
import Random from './components/basic/Random'
import WithParameter from './components/basic/WithParameter'
import Family from './components/basic/Family'
import FamilyMember from './components/basic/FamilyMember'
import ListStudent from './components/repetition/ListStudents'
import ListProduct from './components/repetition/ListProducts'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import UserInfo from './components/conditional/UserInfo'

export default (props) => {
    return (
        <div className='App'>
            <h1> Fundamentos React </h1>
            
            <div  className='Cards'>
                <Card titulo='#08  - Renderização condicional' color="#982395">
                    <EvenOrOdd number={21}/>
                    <UserInfo user={{ name: 'Rafael Freitas'}} />
                    {/* <UserInfo user={{ email: 'Rafael Freitas'}} /> */}
                </Card>                
                <Card titulo='#07  - Desafio Repetição' color="#3A9Ad9">
                    <ListProduct/>
                </Card>
                <Card titulo='#06 - Repetição' color="#FF4c65">
                    <ListStudent/>
                </Card>
                <Card titulo='#05 - Componente com os filhos' color="#00c8F8">
                    <Family last_name='Nomura'>
                        <FamilyMember name='Rafael' />
                        <FamilyMember name='Ana' />
                        <FamilyMember name='Gustavo'/>
                    </Family>
                </Card>
                <Card titulo='#04 - Desafio aleatorio' color="#FA6900">
                    <Random min={1} max={60} />
                </Card>
                <Card titulo='#03 - Fragmento' color='#E94C6F'>
                    <Fragment/>
                </Card>
                <Card titulo='#02 - Com parâmetro' color='#E8B71A'>
                    <WithParameter 
                        titulo='Situação do aluno' 
                        aluno='Herique' 
                        nota={10}/>
                </Card>
                <Card titulo='#01 - Primeiro Componente' color='#588c73'>
                    <First></First>
                </Card>
            </div>
        </div>
    )
}
import React, { useState } from 'react'

import IndirectChildren from './IndirectChildren'


export default props => {
    let [name, setName] = useState('?')
    let [age, setAge] = useState(0)
    let [nerd, setNerd] = useState(false)


    function providerInformations(param_name, param_age, param_nerd) {
        setName(param_name)
        setAge(param_age)
        setNerd(param_nerd)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong></span>
                <span>{nerd ? 'Verdadeiro' : 'Falso' }</span>
            </div>
            <IndirectChildren onClick={providerInformations}></IndirectChildren>
        </div>
    )
}
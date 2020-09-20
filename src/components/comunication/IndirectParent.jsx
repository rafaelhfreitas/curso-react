import React from 'react'

import IndirectChildren from './IndirectChildren'


export default props => {

    // nome idade nerd
    function providerInformations(name, age, nerd) {
        console.log(name, age, nerd)

    }

    return (
        <div>
            <div>Pai</div>
            <IndirectChildren onClick={providerInformations}></IndirectChildren>
        </div>
    )
}
import React from 'react'

import DirectChildren from './DirectChildren'


export default props => {
    return (
        <div>
            <DirectChildren text='Rafael Freitas' number={14} bool= {true}></DirectChildren>
            <DirectChildren text='Rafael Henrique' number={45} bool= {false}></DirectChildren>

        </div>
    )
}
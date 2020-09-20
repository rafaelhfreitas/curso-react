import React, { useState } from 'react'
import './Input.css'


export default props => {

    const [value, setValue] = useState('Inicial')

    function onChange(e) {
        setValue(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* componente controlado */}
                <input value={value} onChange={onChange} ></input>
                {/* componente não controlado */}
                <input value={value} readOnly></input>
                {/* componente não controlado */}
                <input value={undefined}></input>
            </div>

        </div>
    )
}
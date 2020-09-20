import './Loterry.css'
import React, { useState } from 'react'


export default props => {

    function generateNumberNotContained(min, max, array) {
        const random = parseInt(Math.random() * (max +1 -min)) + min
        return array.includes(random) ? 
            generateNumberNotContained(min, max, array) : 
            random
    }
    
    
    
    function generateNumbers(qty){
        const numbers = Array(qty)
            .fill(0)
            .reduce((nums) => {
                const newNumber = generateNumberNotContained(1,60, nums)
                return [...nums,newNumber]
            }, []) 
            .sort((n1,n2) => n1 -n2)
    
        return numbers
    
    }

    
    const [qty, setQty] = useState(props.qty || 6)
    const initialNumbers = generateNumbers(qty)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className="Loterry">
            <h2>Loterry</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Qtde de números</label>
                <input 
                    type="number" 
                    min={6}
                    max={15}
                    value={qty} 
                    onChange={ (e) => {
                        setQty(+e.target.value)
                        setNumbers(generateNumbers(+e.target.value))
                    }}>
                </input>
            </div>
            <button onClick={_ => {setNumbers(generateNumbers(qty))}}>
                Gerar números
            </button>
        </div>
    )
    

}
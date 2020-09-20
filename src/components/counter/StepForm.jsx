import React from 'react'


export default props => {
    return (
        <div>
            <label htmlFor="StepInput">Step:</label>
            <input 
                id="StepInput"
                type="number"
                value={props.step}
                onChange={ (e) => props.setStep(+e.target.value)}
            />
            
        </div>
    )

}
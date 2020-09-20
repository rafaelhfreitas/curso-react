import React from 'react'

export default props => {
    const onClick = props.onClick
    const min = 50
    const max = 70
    const generateAge = () => parseInt(Math.random() * (max - min)) + max
    const generateNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => onClick('Rafael Freitas', generateAge(), generateNerd)}>
                Fornecer informações
            </button>
        </div>
    )
}
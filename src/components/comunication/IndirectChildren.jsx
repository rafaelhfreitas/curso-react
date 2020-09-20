import React from 'react'

export default props => {
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e) {
                     props.onClick('Rafael Freitas', 35, true)
                }
            }>
                Fornecer informações
            </button>
        </div>
    )
}
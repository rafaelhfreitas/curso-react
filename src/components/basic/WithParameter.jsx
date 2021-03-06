import React from 'react'


export default function WithParameter(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{ props.titulo}  </h2>
            <p>
                <strong> { props.aluno } </strong>
                tem note 
                <strong> { props.nota } </strong>
                e foi
                <strong> { status } </strong>!
            </p>
        </div>
    )

}
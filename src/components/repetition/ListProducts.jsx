import React from 'react'

import products from '../../data/products';
import './TableProducts.css'


export default props => {

    function getRows(){

        return products.map((product,i) => {
            return (
                <tr  key={product.id} className={i % 2 === 0 ? 'Even' : 'Odd'}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>R$ {product.value.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })

    }

    return (
        <div className="TableProducts">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getRows()}
                </tbody>

            </table>
        </div>
    )
}
import React from 'react'

import products from '../../data/products';


export default props => {

    const listProducts = products.map((product) => {
        return (
            <li key={product.id}>
                {product.id}) {product.name} -> {product.value}
            </li>
        );
    });



    function getRows(){

        return products.map(product => {
            return (
                <tr>
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
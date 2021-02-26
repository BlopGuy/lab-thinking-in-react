import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({productList}) {
    return (
        <div>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((product) => {
                            return <ProductRow
                                key={product.id}
                                category={product.category}
                                price={product.price}
                                stocked={product.stocked}
                                name={product.name}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default ProductTable;
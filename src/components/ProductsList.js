import React from 'react';
import ProductItem from './ProductItem';

export default function ProductsList({products}){

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Reservation UUID</th>
                        <th>Total Active Products</th>
                        <th>Total Charges</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <ProductItem key={index} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
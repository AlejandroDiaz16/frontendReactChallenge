import React, { useEffect, useState } from 'react';

export default function ProductItem({ product }) {
    const [displayProducts, setDisplayProducts] = useState(false);
    const [ totalActiveProductsByCustomer, setTotalActiveProductsByCustomer] = useState(0);
    const [ totalChargesByCustomer, setTotalChargesByCustomer] = useState(0);

    const toogleDisplayProducts = () => {
        setDisplayProducts(!displayProducts);
    }

    //calculate total active product and the sum of their charges
    const setActiveProductsAndCharges = () => {
        const activeProducts = product.products.filter(product => product.active);
        const activeProductCount = activeProducts.length;
        
        // Calculate the total charge for active products
        const totalCharges = activeProducts.reduce((sum, p) => sum + p.charge, 0);

        setTotalActiveProductsByCustomer(activeProductCount);
        setTotalChargesByCustomer(parseFloat(totalCharges.toFixed(2)));
    }

    useEffect(() => {
        setActiveProductsAndCharges();
    }, [])
    
    return (
        <>
            <tr onClick={toogleDisplayProducts} style={{ cursor: 'pointer' }}>
                <td>{product.reservation_uuid}</td>
                <td>{totalActiveProductsByCustomer}</td>
                <td>{totalChargesByCustomer}</td>
            </tr>
            {displayProducts && (
                <tr>
                    <td colSpan="4">
                        <table border={1} style={{width:'100%'}}>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Status</th>
                                    <th>Product Charge</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.products.map((prod, index) => (
                                    <tr key={index} style={{ color: prod.active != null ? (prod.active ? 'green' : 'red') : '' }}>
                                        <td>{prod.name}</td>
                                        <td>{prod.active != null ? (prod.active ? 'Active' : 'Cancelled') : ''}</td>
                                        <td>{prod.charge}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </td>
                </tr>
            )}
        </>
    );
}

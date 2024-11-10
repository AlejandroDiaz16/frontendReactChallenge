import React, { useEffect, useState } from 'react'
import ProductsList from '../components/ProductsList';
import api from '../api'

export default function Home() {
    const [customerWithProducts, setCustomerWithProducts] = useState([]);

    // get all customer with products and charges
    const getAllProductsByCustomer = async () => {
        const resp = await api('/product/getAllProducts', {method: 'GET'});
        setCustomerWithProducts(resp)
    }
    useEffect(() => {
        getAllProductsByCustomer();
    }, [])
    // console.log(customerWithProducts)
    return (
        <div>
            <ProductsList products={customerWithProducts}/>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

const Products = () => {

    const {products}=useLoaderData()
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("https://dummyjson.com/products")
    //         .then(res => res.json()) // Corrected: Added () to invoke .json() method
    //         .then(data => setProducts(data)) // Corrected: Use 'data' directly
    //         .catch(error => console.error(error)); // Handle fetch errors
    // }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                products.map(product => (
                    <ProductCart key={product.id} product={product}></ProductCart>
                ))
            }
        </div>
    );
};

Products.propTypes = {};

export default Products;

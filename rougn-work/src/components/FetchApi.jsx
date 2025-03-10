import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function FetchApi() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
                console.log(data);
            })
            .catch((error) => {
                console.log("Error fetching products: ", error);
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <h2>Product List</h2>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className='flex flex-wrap gap-2.5'>
                    {products.map((product) => (
                        <div key={product.id} className='w-3xs flex flex-col flex-wrap border'>
                            <img src={product.image} alt={product.title} className='w-2xs h-90 fit object-cover' />
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Rate {product.rating.rate} / Rating {product.rating.count}</p>
                        </div>
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default FetchApi

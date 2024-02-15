// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import Product from '../product/Product';
import Header from '../Header';

function Home() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getProduct = async () => {
        try {
            let res = await fetch('https://fakestoreapi.com/products');
            let data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(products)
    return (
        <div>
            <div className='header'>
                <Header onSearch={handleSearch} />
            </div>
            <div className='container-fluid justify-content-center bgImage'>
                <div className='row'>
                    {filteredProducts.map((product, index) => (
                        <div className="col col-sm-12 col-md-4 col-lg-3" key={index}>
                            <Product product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;

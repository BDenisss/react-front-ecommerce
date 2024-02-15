import React from 'react';
import { useGetProductsQuery } from '../services/productApi';
import ProductComponent from '../components/ProductComponent';

const Home = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery();

    if (isLoading) return (
        <div className="loader-container">
            <span className="loader"></span>
            <p className="loader-text">Chargement...</p>
        </div>
    );
    
    


    if (isError || !products) return <div className='error'>Erreur lors du chargement des produits.</div>;

    return (
        <div className='all-card'>
            {products.map(product => (
                <ProductComponent key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Home;

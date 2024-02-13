import React from 'react';
import { useGetProductsQuery } from '../services/productApi';
import ProductComponent from '../components/ProductComponent';

const Home = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery();

    console.log(products);

    if (isLoading) return <div>Chargement...</div>;
    if (isError || !products) return <div>Erreur lors du chargement des produits.</div>;

    return (
        <div className='all-card'>
            {products.map(product => (
                <ProductComponent key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Home;

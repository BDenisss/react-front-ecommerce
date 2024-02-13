import React from 'react';
import { Link } from 'react-router-dom';
import './ProductComponent.css';

const ProductDetailss = ({ product }) => {
    return (
        <div className='card-wrapper'>
            <div className='card'>
                <div className='product-img'>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className='product-title'>
                    <h2>{product.title}</h2>
                </div>
                <div className='product-details'>
                    <p>Prix: {product.price}€</p>
                    <p>Quantité: {product.quantity}</p>
                </div>
                <Link to={{ pathname: `product/${product.id}`, state: { productName: product.title } }}>Voir le produit</Link>
            </div>
        </div>
    );
}


const ProductComponent = ({ product }) => {
    return (
        <div>
            {/* <ProductDetails product={product} /> */}
            <ProductDetailss product={product} />

        </div>
    );
};

export default ProductComponent;

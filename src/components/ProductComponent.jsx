import React from 'react';
import './ProductComponent.css';

const ProductDetails = ({ product }) => {
    return (
        <div className="clash-card">
            <div className="clash-card__image clash-card__level--background">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="clash-card__unit-name">{product.title}</div>
            <div className="clash-card__unit-description">
                <p>{product.price}€</p>
                <p>Quantité: {product.quantity}</p>
            </div>
        </div>
    );
}

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

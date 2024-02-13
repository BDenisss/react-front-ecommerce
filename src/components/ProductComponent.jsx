import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './ProductComponent.css';
import { CartContext } from '../context/CartContext';
import  { FaShoppingCart, FaProductHunt } from 'react-icons/fa';

const ProductDetailss = ({ product }) => {

        const { addToCart } = useContext(CartContext); // Utilisation de useContext pour accéder aux fonctions du CartContext
    
        const handleAddToCart = () => {
            addToCart(product); // Ajouter le produit au panier
        };

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
                <div className='link-product-wrapper'>
                    <Link className='link-product' to={{ pathname: `product/${product.id}` }}><FaProductHunt/> Voir le produit</Link>
                    {/* Ici ajouter un bouton pour ajouter au panier */}
                    <button className='link-product' onClick={handleAddToCart}><FaShoppingCart/>Ajouter au panier</button>
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

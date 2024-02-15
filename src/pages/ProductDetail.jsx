import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCommentsQuery } from '../services/productApi';
import './ProductDetail.css';
import { useState } from 'react';
import { useCreateCommentMutation} from '../services/productApi';


const ProductDetail = () => {

    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [createComment] = useCreateCommentMutation();
    const { data: comments, isLoading, isError } = useGetCommentsQuery(id);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username && comment) {
            await createComment({ data: { username, comment }, id });
        }
    };


    if (isLoading) return <div className='loading'>Chargement...</div>;
    if (isError || !comments) return <div className='error'>Erreur lors du chargement des commentaires.</div>;

    return (
        <div className='product-comment-page'>
            <h1>Les commentaires du produit</h1>
            <div className='section-comment-wrapper'>
                <div className='let-comment-wrapper'>
                    <h2 className='let-comment-title'>Laissez un commentaire</h2>
                    <form onSubmit={handleSubmit}>
            <div className='form-name'>
                <label htmlFor='username'>Votre nom</label>
                <input
                    placeholder='Votre nom'
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='form-comment'>
                <label htmlFor='comment'>Votre commentaire</label>
                <textarea
                    placeholder='Votre commentaire'
                    id='comment'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button type='submit'>Envoyer</button>
        </form>
                </div>
                <div className='comment-wrapper'>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div className='comment' key={comment.id}>
                            <div className='comment-header'>
                                <p className='comment-username'>De {comment.username}</p>
                            </div>
                            <p className='comment-content'>{comment.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>Aucun commentaire pour ce produit.</p>
                )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

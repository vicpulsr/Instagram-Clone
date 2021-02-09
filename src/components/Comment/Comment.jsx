import React, { useState } from 'react';
import { AiTwotoneHeart, AiOutlineHeart } from 'react-icons/ai'; 

import './Comment.css';

function Comment() {
    const [hasComment, setHasComment] = useState('');
    const [like, setLike] = useState(false);
    const [comments, setComments] = useState([]);
    const [showComments, setShowComents] = useState(false);

    function hasComments(event) {
        const value = event.target.value;
        setHasComment(value);
    }

    function isLiked(index) {
        let auxComments = [...comments];
        auxComments[index].liked = !auxComments[index].liked;
        setComments(auxComments);
    }

    function addComment() {
        setShowComents(true);
        let newComment = { user: 'vicpulsr', text: hasComment, liked: like }
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <div className="add-comment">
                <input value={hasComment} onChange={event => hasComments(event)} placeholder="Adicione um comentário" />
                <button onClick={addComment} className={ hasComment ? 'btn-add' : ''}>Publicar</button>
            </div>
            {
                showComments ? comments.map((comment, index) => {
                    return (
                        <div className="comment">
                <div className="comment-header">
                    <span>{comment.user}</span>
                    <p>{comment.text}</p>
                </div>
                <div className="btn-comment">
                    <button className={comment.liked ? 'btn-like' : ''} onClick={() => isLiked(index)}>{
                        comment.liked ? <AiTwotoneHeart size={15} /> : <AiOutlineHeart size={15} />
                    }</button>
                </div>
            </div>
                    )
                }) : ''
            }
        </div>
    );
}

export default Comment; 
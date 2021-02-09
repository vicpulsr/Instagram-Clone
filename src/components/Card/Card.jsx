import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { BsChat, BsBookmarkFill } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import { VscBookmark } from 'react-icons/vsc';

import avatar from '../../assets/images/avatar.jpeg';

import Share from '../Share/Share';
import Comment from '../Comment/Comment';

import './Card.css';

function Card( { image }) {

    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const [likesNumber, setLikesNumber] = useState(31);
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false);

    useEffect(() => {
        if(like) {
            setLikesNumber(likesNumber+1);
        } else {
            setLikesNumber(likesNumber-1);
        }
    }, [like])

    function isLiked() {
        console.log('aqui');
        setLike(!like);
    }

    function isSaved() {
        setSave(!save);
    }

    function setShareOptionsOn() {
        setShowShareOptions(!showShareOptions);
    }

    function setCommentOn() {
        console.log('coment')
        setShowAddComment(!showAddComment);
    }

    return (
        <div className="card">
            <div className="card-header">
                <img className="card-avatar" src={avatar} />
                <div>
                    <p>vicpulsr</p>
                    <p>Porto Alegre</p>
                </div>
            </div>
            <div className="card-image">
                <img src={image} />
            </div>
            <div className="nav-icons">
                <div>
                    <button className={like ? 'btn-like' : ''} onClick={isLiked}>{
                        like ? <AiTwotoneHeart size={25} /> :   <AiOutlineHeart  size={25} />
                    }</button>
                    <button onClick={setCommentOn} className="btn-comment"><BsChat size={25} /></button>
                    <button onClick={setShareOptionsOn}><RiSendPlaneFill size={25} /></button>
                    {
                        showShareOptions ? <Share exit={setShowShareOptions} /> : ''
                    }
                </div>
                <button onClick={isSaved}>{
                    save ? <BsBookmarkFill size={25} /> : <VscBookmark size={25} />
                }</button>
            </div>
            <div className="footer-card">
                <div className="likes"> 
                    <img className="card-avatar avatar-comment" src={avatar} />
                    <span>Curtido por <strong>vicpulsr</strong> e <strong>outras {likesNumber} pessoas</strong></span>
                </div>
                <span className="time">há 17 horas</span>
                {
                        showAddComment ? <Comment /> : ''
                }
            </div>
        </div>
    );
}

export default Card;
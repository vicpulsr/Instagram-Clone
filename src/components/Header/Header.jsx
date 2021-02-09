import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineCompass, AiOutlineHeart } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';

import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpeg';

import './Header.css';
import ProfileOptions from '../ProfileOptions/ProfileOptions';

function Header() {

    const [showOptions, setShowOptions] = useState(false);

    function setOptionsOn() {
        setShowOptions(!showOptions);
        console.log('aqui')
    }

    return (
        <div className="container">
            <div className="logo">
                <Link to="/"><img className="logo-image" src={logo} /></Link>
            </div>
            <div className="icons">
                <Link to="/"><AiFillHome size={22} /></Link>
                <Link to="/inbox"><RiSendPlaneFill size={22} /></Link>
                <AiOutlineCompass size={22} />
                <AiOutlineHeart size={22} />
                <button onClick={setOptionsOn}>
                <img className="header-avatar" src={avatar} />
                </button>
                    {
                        showOptions ? <ProfileOptions /> : ''
                    }
            </div>
        </div>
    );
}

export default Header;

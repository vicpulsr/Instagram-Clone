import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import avatar from '../../assets/images/avatar.jpeg';

import './Nav.css';

function Nav() {
    return (
        <div className="container-nav">
            <div className="avatar">
                <span><AiOutlinePlusCircle size={25} className="icon" /></span>
                <img src={avatar} />
                <p>vicpulsr</p>
            </div>
            <div className="avatar">
                <img src={avatar} />
                <p>vicpulsr</p>
            </div>
            <div className="avatar">
                <img src={avatar} />
                <p>vicpulsr</p>
            </div>
            <div className="avatar">
                <img src={avatar} />
                <p>vicpulsr</p>
            </div>

        </div>
    );
}

export default Nav;
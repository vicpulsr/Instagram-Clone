import React from 'react'

import avatar from '../../assets/images/avatar.jpeg';

import './InboxCard.css';

function InboxCard() {
    return (
        <div className="inbox-card">
            <img className="card-inbox-avatar" src={avatar} />
            <div className="inbox-message">
                <p>vicpulsr</p>
                <p>Enviou uma publicação...</p>
            </div>
        </div>
    );
}

export default InboxCard;
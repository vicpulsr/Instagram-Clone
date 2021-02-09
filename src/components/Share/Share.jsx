import React, { useState } from 'react';
import { RiSendPlaneFill, RiFacebookCircleLine, RiMessengerLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';

import './Share.css';

function Share({ exit }) {

    function exitOptions() {
        exit();
    }

    return (
        <>
            <div className="container-options-share">
                <div className="header-options">
                    <span>Compartilhar em...</span>
                    <button onClick={exitOptions}><GrClose size={25} /></button>
                </div>
                <div className="share-options">
                    <button><RiSendPlaneFill size={25} />Compartilhar no Direct</button>
                    <button><RiFacebookCircleLine size={25} />Compartilhar no Facebook</button>
                    <button><RiMessengerLine size={25} />Compartilhar no Messenger</button>
                    <button><FiTwitter size={25} />Compartilhar no Twitter </button>
                    <button><AiOutlineMail size={25} />Compartilhar por email</button>
                    <button><BsLink45Deg size={25} />Copiar link </button>
                    <button  onClick={exitOptions}>Cancelar</button>
                </div>
            </div>
        <div className="out" onClick={exitOptions}>
        </div>
        </>
    );
}

export default Share;
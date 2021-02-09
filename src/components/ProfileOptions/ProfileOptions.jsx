import React from 'react';
import { VscBookmark } from 'react-icons/vsc';
import { BsGearWide } from 'react-icons/bs';
import { FiRefreshCcw } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

import './ProfileOptions.css';

function ProfileOptions() {
    return (
        <div className="container-options">
            <div className="profile-options">
                <div className="options">
                    <button><CgProfile size={20} />Perfil</button>
                    <button><VscBookmark size={20} />Salvos</button>
                    <button><BsGearWide size={20} />Configurações</button>
                    <button><FiRefreshCcw size={20} />Trocar de conta</button>
                </div>
                <p>Sair</p>
            </div>
        </div>
    );
}

export default ProfileOptions;
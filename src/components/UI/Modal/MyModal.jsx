import React from 'react';
import './MyModal.css'

const MyModal = ({setActive, Active, img_path, text, title}) => {
    return (
        <div 
            className={Active ? 'modal active' : 'modal'} onClick={() => setActive(false)}
            >
            <div className='modal_content' onClick={e => e.stopPropagation()}
                style={{marginTop: '5%'}}    
            >
                <img 
                    style={{transform: 'scale(1)', width: '100%', maxHeight: '800px', height: '50vh',  maxWidth: '1000px'}}
                    src={require('../../../IMG/' + img_path)} 
                />
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default MyModal;
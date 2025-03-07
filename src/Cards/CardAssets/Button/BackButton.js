import React from 'react';
import './BackButton.css';

function BackButton({ onClick, title }){
    return (
        <button className='back-button' onClick={onClick}>{title}</button>
    )
}

export default BackButton;
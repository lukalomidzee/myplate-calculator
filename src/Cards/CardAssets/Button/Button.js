import React from 'react';
import './Button.css';

function Button({ onClick, title, disabled, id }){
    return (
        disabled ? <button onClick={onClick} disabled>{title}</button> :
        <button id={id} onClick={onClick}>{title}</button>
    )
}

export default Button;
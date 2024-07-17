import React from 'react';
import styles from "./PopUp.module.css";
import errorIcon from '../Modal/cerrar.png';
import successIcon from './check-circle.svg';

export const Popup = ({ message, type }) => {
    const icon = type === 'error' ? errorIcon : successIcon;

    return (
        <div className={`${styles.popup} ${type === 'error' ? '' : styles['popup--large']}`}>
            <img src={icon} alt={`Icono de ${type}`} style={{ color: 'inherit' }} />
            <p style={{ textAlign: 'center' }}>{message}</p>
        </div>
    );
};



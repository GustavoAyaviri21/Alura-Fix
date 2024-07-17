import React from 'react';
import styles from './OptionInput.module.css';
import { useVideosStore } from '../../zustand/useVideosStore';

export const OptionInput = ({ children, from = '', placeholder, inputValue = '', name }) => {
    const { categories, handleInputChange, errorMessages, verifyField } = useVideosStore((state) => state);

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value);
        verifyField(e.target);
    };

    return (
        <div className={`${styles.label} ${from === 'modal' ? styles['label--modal'] : ''}`}>
            {children}
            <select
                className={`${styles.select} ${from === 'modal' ? styles['select--modal'] : ''} ${errorMessages[name] ? styles['select--error'] : ''
                    }`}
                value={inputValue}
                name={name}
                onChange={handleChange}
                required
            >
                <option value="" disabled hidden>
                    {placeholder}
                </option>
                {categories.map((category) => (
                    <option value={category.nombre} key={category.id}>
                        {category.nombre}
                    </option>
                ))}
            </select>
            {errorMessages[name] && <span className={styles.error}>{errorMessages[name]}</span>}
        </div>
    );
};


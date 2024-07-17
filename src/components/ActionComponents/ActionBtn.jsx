import React from 'react';
import styles from './ActionBtn.module.css';
import { useVideosStore } from '../../zustand/useVideosStore';


export const ActionBtn = ({ children, main, type, action }) => {
  const { isFormValid } = useVideosStore((state) => state);

  const buttonClass = main
    ? `${styles.button} ${styles.buttonMain}`
    : `${styles.button} ${styles.buttonSecondary}`;

  return (
    <>
      {action ? (
        <button onClick={() => action()} type={type} className={buttonClass}>
          {children}
        </button>
      ) : (
        <button
          disabled={!isFormValid}
          type={type}
          className={`${buttonClass} ${!isFormValid ? styles.buttonDisabled : ''}`}
        >
          {children}
        </button>
      )}
    </>
  );
};


import React from 'react';
import styles from './ButtonContainer.module.css';

export const ButtonContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};



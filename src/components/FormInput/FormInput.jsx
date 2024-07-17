import React from 'react';
import styles from './FormInput.module.css';
import { useVideosStore } from '../../zustand/useVideosStore';

export const FormInput = ({
  children,
  type = 'text',
  from = '',
  placeholder,
  inputValue = '',
  big,
  name,
  pattern,
  minlength,
  maxlength,
  title,
}) => {
  const {
    handleInputChange,
    errorMessages,
    verifyField,
  } = useVideosStore((state) => ({
    handleInputChange: state.handleInputChange,
    errorMessages: state.errorMessages,
    verifyField: state.verifyField,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
    verifyField(e.target);
  };

  const inputProps = {
    className: `${styles.inputStyles} ${from === 'modal' ? styles.inputStylesModal : ''} ${errorMessages[name] ? styles.inputStylesError : ''}`,
    type: type,
    value: inputValue,
    placeholder: placeholder,
    onChange: handleChange,
    name: name,
    required: true,
    pattern: pattern,
    minLength: minlength,
    maxLength: maxlength,
    title: title,
  };

  return (
    <label className={`${styles.labelStyles} ${from === 'modal' ? styles.labelStylesModal : styles.labelStylesDefault}`}>
      {children}
      {big ? (
        <textarea
          className={`${styles.textareaStyles} ${from === 'modal' ? styles.textareaStylesModal : ''} ${errorMessages[name] ? styles.textareaStylesError : ''}`}
          {...inputProps}
        />
      ) : (
        <input {...inputProps} />
      )}
      {errorMessages[name] && <span className={styles.errorStyles}>{errorMessages[name]}</span>}
    </label>
  );
};
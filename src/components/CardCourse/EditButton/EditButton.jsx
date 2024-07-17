import React from "react";
import styles from "./EditButton.module.css";

const EditButton = ({ img, children, video, action }) => {
  return (
    <button
      className={styles.buttonStyles}
      onClick={() => (children === "Borrar" ? action(video.id) : action(video))}
    >
      <img src={img} alt={`icono de ${children}`} />
      <span className={styles.textStyles}>{children}</span>
    </button>
  );
};

export default EditButton;

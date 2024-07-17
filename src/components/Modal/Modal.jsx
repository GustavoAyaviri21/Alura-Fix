import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import closeBtn from './cerrar.png';

import { useVideosStore } from '../../zustand/useVideosStore';
import { FormInput } from '../FormInput/FormInput';
import { OptionInput } from '../OptionInput/OptionInput';
import { ActionBtn } from '../ActionComponents/ActionBtn';


export const Modal = ({ video, closeModal }) => {
  const {
    title,
    image,
    category,
    videoLink,
    description,
    handleInputChange,
    updateVideoInfo,
    clearInputs,
  } = useVideosStore((state) => state);

  useEffect(() => {
    const getInitialValue = () => {
      if (video) {
        handleInputChange('titulo', video.titulo || '');
        handleInputChange('categoria', video.Categoria || '');
        handleInputChange('imagen', video.linkImagenVideo || '');
        handleInputChange('video', video.linkVideo || '');
        handleInputChange('descripcion', video.descripcion || '');
      }
    };

    getInitialValue();
  }, [video]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = video.id;
    let info = { title, image, category, videoLink, description, id };

    updateVideoInfo(info);
    closeModal();
  };

  return (
    <>
      {video && (
        <>
          <div className={styles.overlay} />
          <dialog className={styles.dialog} open={!!video}>
            <form className={styles.form} method="dialog" onSubmit={handleSubmit}>
              <button type="button" className={styles.buttonClose} onClick={closeModal}>
                <img src={closeBtn} alt="Cerrar" />
              </button>
              <legend className={styles.title}>Editar card:</legend>

              <FormInput
                inputValue={title}
                placeholder="Título del video"
                from="modal"
                name="titulo"
                minlength="3"
                title="Tienes que tener al menos 3 caracteres para ser válido"
              >
                Título
              </FormInput>
              <OptionInput
                inputValue={category}
                placeholder="Escoja una categoría"
                from="modal"
                name="categoria"
              >
                Categoría
              </OptionInput>
              <FormInput
                inputValue={image}
                placeholder="Link de la imagen"
                type="url"
                from="modal"
                name="imagen"
                pattern="^https:\/\/i\.ytimg\.com\/vi\/.*$"
                title="Por favor coloca una URL de YouTube"
              >
                Imagen
              </FormInput>
              <FormInput
                inputValue={videoLink}
                placeholder="Link del video"
                type="url"
                from="modal"
                name="video"
                pattern="^https:\/\/www\.youtube\.com\/watch\?v=.*$"
                title="Por favor coloca una URL de YouTube"
              >
                Video
              </FormInput>
              <FormInput
                inputValue={description}
                big
                placeholder="¿De qué se trata este vídeo?"
                from="modal"
                name="descripcion"
                minlength="3"
                maxlength="6000"
              >
                Descripción
              </FormInput>
              <div className={styles.buttonContainer}>
                <ActionBtn type="submit" main>
                  Guardar
                </ActionBtn>
                <ActionBtn action={clearInputs} type="button">
                  Limpiar
                </ActionBtn>
              </div>
            </form>
          </dialog>
        </>
      )}
    </>
  );
};
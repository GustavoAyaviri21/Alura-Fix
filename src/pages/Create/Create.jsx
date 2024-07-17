import React, { useEffect } from 'react';
import { useVideosStore } from '../../zustand/useVideosStore';
import styles from './Create.module.css';
import { ActionBtn, ButtonContainer, FormInput, OptionInput } from '../../components';
import { Popup } from '../../components/PopUp/PopUp';

const Create = () => {
    const {
        title,
        image,
        category,
        videoLink,
        description,
        handleInputChange,
        createNewVideo,
        clearInputs,
        popup,
        setErrorMessages,
    } = useVideosStore();

    useEffect(() => {
        // Resetear los valores y mensajes de error al montar el componente
        handleInputChange('titulo', '');
        handleInputChange('categoria', '');
        handleInputChange('imagen', '');
        handleInputChange('video', '');
        handleInputChange('descripcion', '');
        setErrorMessages({});
    }, [handleInputChange, setErrorMessages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewVideo({ title, image, category, videoLink, description });
        clearInputs();
    };

    return (
        <section className={styles.addContainer}>
            <div className={styles.mainTitleContainer}>
                <h1>Nuevo Video</h1>
                <p>Complete el formulario para crear una nueva tarjeta de video</p>
            </div>

            <form className={styles.formStyles} onSubmit={handleSubmit}>
                <legend className={styles.titleStyles}>crear tarjeta</legend>

                <FormInput
                    inputValue={title}
                    placeholder="Título del video"
                    name="titulo"
                    minlength="3"
                    title="tienes que tener al menos 3 caracteres para ser valido"
                    handleInputChange={handleInputChange}
                >
                    Título
                </FormInput>
                <OptionInput
                    inputValue={category}
                    placeholder="Escoja una categoría"
                    name="categoria"
                    handleInputChange={handleInputChange}
                >
                    Categoria
                </OptionInput>
                <FormInput
                    inputValue={image}
                    placeholder="link de la imagen"
                    type="url"
                    name="imagen"
                    pattern="^https://i.ytimg.com/vi/.*$"
                    title="Por favor coloca una Url de youtube"
                    handleInputChange={handleInputChange}
                >
                    Imagen
                </FormInput>
                <FormInput
                    inputValue={videoLink}
                    placeholder="Link del video"
                    type="url"
                    name="video"
                    pattern="^https://www.youtube.com/watch?v=.*$"
                    title="Por favor coloca una Url de youtube"
                    handleInputChange={handleInputChange}
                >
                    Video
                </FormInput>
                <FormInput
                    inputValue={description}
                    big
                    placeholder="¿De qué se trata este vídeo?"
                    name="descripcion"
                    minlength="3"
                    maxlength="6000"
                    handleInputChange={handleInputChange}
                >
                    Descripción
                </FormInput>

                <ButtonContainer>
                    <ActionBtn type="submit" main>
                        Guardar
                    </ActionBtn>
                    <ActionBtn action={clearInputs} type="button">
                        limpiar
                    </ActionBtn>
                </ButtonContainer>
            </form>
            {popup.show && <Popup message={popup.message} type={popup.type} />}
        </section>
    );
};

export default Create;

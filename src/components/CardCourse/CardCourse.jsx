import React from "react";
import styles from "./CardCourse.module.css";
import editIcon from "./editar.png";
import deleteIcon from "./borrar.png";
import EditButton from "./EditButton/EditButton";
import { useVideosStore } from "../../zustand/useVideosStore";

export const CardCourse = ({ color, video }) => {
    const { linkImagenVideo, titulo } = video;
    const { setSelectedVideo, deleteVideo } = useVideosStore((state) => state);

    return (
        <article className={styles.cardContainer} style={{ "--color": color }}>
            <img className={styles.imageStyles} src={linkImagenVideo} alt={titulo} />
            <div className={styles.buttonContainer} style={{ "--color": color }}>
                <EditButton action={deleteVideo} video={video} img={deleteIcon}>
                    Borrar
                </EditButton>
                <EditButton action={setSelectedVideo} video={video} img={editIcon}>
                    Editar
                </EditButton>
            </div>
            <div className={styles.shadow} style={{ "--color": color }} />
        </article>
    );
};

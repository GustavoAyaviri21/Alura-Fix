import React from "react";
import styles from "./CategoryList.module.css";
import { CardCourse } from "../CardCourse/CardCourse";
import { CategoryTitle } from "../CategoryTitle/CategoryTitle";
import { useVideosStore } from "../../zustand/useVideosStore";

export const CategoryList = ({ category }) => {
    const { videos } = useVideosStore((state) => state);
    const { color, nombre } = category;

    return (
        <>
            {videos.length > 0 && (
                <section className={styles.sectionStyles}>
                    <CategoryTitle 
                        title={nombre}
                        color={color}
                    />
                    <div className={styles.courseContainer}>
                        {videos
                            .filter((video) => video.Categoria === nombre)
                            .map((video) => (
                                <CardCourse color={color} key={video.id} video={video} />
                            ))}
                    </div>
                </section>
            )}
        </>
    );
};

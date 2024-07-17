import { CategoryTitle } from "../CategoryTitle/CategoryTitle";
import styles from "./Banner.module.css";
export const Banner = () => {
    return (
        <div
            className={styles.container}
        >
            <img
                className={styles.background}
                src="https://raw.githubusercontent.com/Diegodelias/challenge-one-aluraflix-latam/main/aluraflix/src/assets/Slider/slider1.png"
                alt="background" />
            <div
                className={styles.content}
            >
                <div className={styles.card}>
                    <div className={styles.descriptionContainer}>
                        <CategoryTitle
                            title={"FRONTEND"}
                            variant={"frontend"}
                        />
                        <h2>Challenge React</h2>
                        <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                    </div>
                    <img
                        className={styles.imageCourse}
                        src="https://raw.githubusercontent.com/Diegodelias/challenge-one-aluraflix-latam/main/aluraflix/src/assets/thumbnails/bannerCard.png"
                        alt="course"
                    />
                </div>

            </div>

        </div>
    );
}
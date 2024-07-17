import styles from './CategoryTitle.module.css';

export const CategoryTitle = ({ title, color }) => {
   
    return (
        <div
            className={styles.container}
            style={{backgroundColor: color}}
        >
            <h1
                className={styles.title}
            >
                {title}
            </h1>
        </div>
    );
}
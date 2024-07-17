import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <div
            className={styles.container}
        >
            <img
                className={styles.logo}
                src="../../../../src/assets/logo.png"
                alt="logo"
            />
        </div>
    );
}
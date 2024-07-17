import { NavButton } from '../NavButton/NavButton';
import styles from './NavBar.module.css';
export const NavBar = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.logo}
                src="../../../../src/assets/logo.png"
                alt="logo"
            />
            <div
                className={styles.buttonContainer}
            >
                <NavButton
                    key={"home"}
                    isActive={false}
                    path={"/"}
                    text={"HOME"}
                />
                <NavButton
                    key={"nuevo"}
                    isActive={true}
                    path={"/create"}
                    text={"NUEVO VIDEO"}
                />
            </div>

        </div>
    );
}
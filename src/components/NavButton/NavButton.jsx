import { Link } from 'react-router-dom';
import styles from './NavButton.module.css';
export const NavButton = ({ isActive, text, path }) => {
    return (
        <Link
            className={ isActive? styles.activebutton : styles.button}
            to={path }           
        >
            <span className={styles.text}>
                {text}
            </span>
        </Link>

    );
}
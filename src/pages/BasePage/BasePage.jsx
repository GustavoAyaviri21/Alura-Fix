import { Outlet } from "react-router-dom"
import { Footer, NavBar } from "../../components"
import styles from "./BasePage.module.css"

const BasePage = () => {
    return (
        <main
            className={styles.container}
        >
            <NavBar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default BasePage
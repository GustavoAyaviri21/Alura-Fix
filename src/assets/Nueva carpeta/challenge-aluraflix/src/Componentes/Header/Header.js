import "./Header.css"
import { Link } from "react-router-dom"
import logo from '../../Assets/img/Logo.svg';

const Header = () => {
    return <header>
        <nav className="navbar navbar-light">
            <div className="container-fluid">
                <img className="logo" src={logo} alt="logo"></img>
                <div className="btnContainer">
                    <Link to="/"><button className="btnHome">HOME</button></Link>
                    <Link to="/NuevoVideo"><button className="btnNewVideo">NUEVO VIDEO</button></Link>
                </div>
            </div>
        </nav>
    </header>
}

export default Header
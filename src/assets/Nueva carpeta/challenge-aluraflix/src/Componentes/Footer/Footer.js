import './Footer.css'
import logo from '../../Assets/img/Logo.svg';

const Footer = () => {
    return <footer>
        <div className="container-fluid footer">
            <img className="logo" src={logo} alt="logo"></img>
        </div>
    </footer>
}

export default Footer;
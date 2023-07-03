import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.modules.css';

function Footer() {
    return (
        <footer className="footer">
            <ul className="social_list">
                <li>
                    <a href="https://www.instagram.com/livelikeschmitz">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/schmitz014/">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/pedro-schmitz-961b7822b/">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p className="copy_right">
                <span>Custo</span> by <i>Pedro Schmitz</i> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;

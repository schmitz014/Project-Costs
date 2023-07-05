import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.modules.css';
import logo from '../../img/costs_logo.png';

function Navbar(){
    return(
        <nav className="navbar">
          <Container>
            <Link to="/">
                <img src={logo} alt='Custo'></img>
            </Link>
            <ul className="list">
                <li className="item">
                    <Link to="/">Home</Link>
                </li>
                <li className="item">
                    <Link to="/projetos">Projetos</Link>
                </li>
                <li className="item">
                    <Link to="/empresa">Empresa</Link>
                </li>
                <li className="item">
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
          </Container>
        </nav>
    )
}

export default Navbar;
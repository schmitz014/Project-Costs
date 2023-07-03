import styles from './Home.modules.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home(){
    return (
        <section className='home_container'>
            <h1>Bem-vindo ao <span>Custo</span>!</h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/NovoProjeto" text="Criar Projeto"></LinkButton>
            <img src={savings} alt="Custo"></img>
        </section>
    )
    
}
export default Home;
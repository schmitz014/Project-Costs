import styles from './novoProjeto.modules.css';
import ProjetoForm from '../project/projetoForm';

function NovoProjeto(){
    return(
        <div className='newProject_container'>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm/>
        </div>
    )

}
export default NovoProjeto;
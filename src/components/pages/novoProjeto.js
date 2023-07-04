import ProjetoForm from '../project/projetoForm';
import styles from './NovoProjeto.modules.css';


function NovoProjeto(){
    return(
        <div className='newProject_container'>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm btnText="Criar Projeto"/>
        </div>
    )

}
export default NovoProjeto;
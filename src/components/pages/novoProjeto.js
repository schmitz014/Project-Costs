import { useNavigate } from 'react-router-dom';
import ProjetoForm from '../project copy/ProjetoForm';
import styles from './NovoProjeto.modules.css';


function NovoProjeto(){

    const history = useNavigate();

    function createPost(project){
        // initialize cost and services

        project.cost = 0;
        project.services = [];


        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((resp => resp.json()))
        .then((data) => {
            console.log(data)
            //redirect
            history('/projects', { state: { message: 'Projeto criado com sucesso!' } });
        })
        .catch(err => console.log(err));
    }

    return(
        <div className='newProject_container'>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )

}
export default NovoProjeto;
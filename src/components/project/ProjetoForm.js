import styles from './Projeto.modules.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjetoForm({btnText}){
    return(
        <form className='form'>

            <Input type="text" 
            name="name" 
            text="Nome do projeto" 
            placeholder="Insira o nome do projeto"/>
                
            <Input type="number"
            name="budget" 
            text="Orçamento do projeto" 
            placeholder="Insira o orçamento total"/>

            <Select name="category_id" text="Selecione a categoria" />

            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjetoForm;
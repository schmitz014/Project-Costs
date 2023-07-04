import styles from './Projeto.modules.css';
import { useState, useEffect } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjetoForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className="form">
      <Input
        type="text"
        name="name"
        text="Nome do projeto"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        name="budget"
        text="Orçamento do projeto"
        placeholder="Insira o orçamento total"
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjetoForm;

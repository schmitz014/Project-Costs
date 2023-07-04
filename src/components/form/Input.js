import styles from './Input.modules.css';

function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className='form_control'>
            <label htmlFor={name}>{text}</label>
            <input type={type} 
            name={name} 
            id={name} 
            onChange={handleOnChange} 
            placeholder={placeholder}
            value={value}></input>
        </div>
    )
}

export default Input;
import styles from './SubmitButton.modules.css';

function SubmitButton({text}){
    return(
        <div>
            <button className='btn'>{text}</button>
        </div>
    )
}

export default SubmitButton;
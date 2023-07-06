import { useLocation } from "react-router-dom";
import Mensagem from "../components/layout/Mensagem";

function Projetos(){

    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message;
    }

    return(
        <div>
            <h1>Meus Projetos</h1>
            {message && <Mensagem type="success" msg={message}/>}
        </div>
        )
    
}
export default Projetos;
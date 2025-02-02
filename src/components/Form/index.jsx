import Input from "../Input";
import "./Form.css";

function Form(){
    const sendLogin = (event) => {
        event.preventDefault();
        console.log('O formulário foi submetido')
    }
    return(
        <form onSubmit={sendLogin}>
            <h1>Login</h1>
            <Input label="Email" type="email"/>
            <Input label="Password" type="password"/>
            <input className="register-button" type="submit" value="Registrar"/>
        </form>
    )
}

export default Form;
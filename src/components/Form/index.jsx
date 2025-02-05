import { useState } from "react";
import Input from "../Input";
import "./Form.css";

function Form(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayEmail, setDisplay] = useState("");
    const [displayPassword, setDisplayPassword] = useState("");

    const sendLogin = (event) =>{
        event.preventDefault();
        setDisplay(email)
        setDisplayPassword(password)
    }
    
    return(
        <form onSubmit={sendLogin}>
            <h1>Login</h1>
            <Input 
                label="Email" 
                type="email"
                value = {email}
                handleValue = {value => setEmail(value)}
            />
            <Input 
                label="Password" 
                type="password"
                value = {password}
                handleValue = {value => setPassword(value)}
            />
            <input className="register-button" type="submit" value="Registrar"/>
            {displayEmail &&<p>Login:{displayEmail}</p>}
            {displayPassword && <p>Senha:{displayPassword}</p>}
        </form>
    )
}

export default Form;
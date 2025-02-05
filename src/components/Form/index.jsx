import Input from "../Input";
import "./Form.css";
import { useState } from "react";

function Form(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const sendLogin = (event) => {
        event.preventDefault();
        console.log('O formulário foi submetido')
        console.log(`Email:${email}\n Password:${password}`)
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
        </form>
    )
}

export default Form;
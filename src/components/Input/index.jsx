import './Input.css';

function Input(props){
    const getValue = (event)=>{
        props.handleValue(event.target.value);
    }
   
    return (
        <div className="inputName">
            <label htmlFor="">{props.label}</label>
            <input type={props.type} onChange={getValue}/>
        </div>
    )
}

export default Input;
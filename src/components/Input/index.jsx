import './Input.css';

function Input(props){
    let valor = ""
    const getValue = (event)=>{
        valor = event.target.value;
        console.log(valor);
    }
    return (
        <div className="inputName">
            <label htmlFor="">{props.label}</label>
            <input type={props.type} onChange={getValue}/>
        </div>
    )
}

export default Input;
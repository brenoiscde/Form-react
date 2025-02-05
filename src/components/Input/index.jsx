import './Input.css';

function Input(props){
    
    const handleTargetValue = (event) =>{
        props.handleValue(event.target.value);
    }
    return (
        <div className="inputName">
            <label htmlFor="">{props.label}</label>
            <input type={props.type} onChange={handleTargetValue} />
        </div>
    )
}

export default Input;
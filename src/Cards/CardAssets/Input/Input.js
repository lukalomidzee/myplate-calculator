import './Input.css';

function Input(props){
    return (
        <div className='input-div'>
            <label className='input-label'>{props.name}</label>
            <input id={props.id} className='input' type='number' inputMode='numeric' min={props.min} max={props.max} required pattern="[0-9]*" onChange={props.onChange} />
        </div>
    );
}

export default Input;
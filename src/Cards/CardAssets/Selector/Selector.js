import './Selector.css';

function Selector(props){
    return (
        <select>
            <option selected="true" disabled>{props.hint}</option>

        </select>
    );
}

export default Selector;
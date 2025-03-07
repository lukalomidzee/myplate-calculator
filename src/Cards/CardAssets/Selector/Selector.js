import './Selector.css';

function Selector(props){
    let values = props.selectValues;
    const sortedEntries = Object.entries(values).sort(([keyA], [keyB]) => {
        return parseFloat(keyA) - parseFloat(keyB); // Sort numerically
    });

    return (
        <select defaultValue="" onChange={props.onChange}>
            <option value="" disabled>{props.hint}</option>
            {sortedEntries.map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
            ))}
        </select>
    );
}

export default Selector;

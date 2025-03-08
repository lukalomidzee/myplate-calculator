import './BlockHeader.css';

function BlockHeader(props) {
    return (
        <div>
            <span>
                {props.header}
            </span>
            <span>
                {props.result}
            </span>
        </div>
    );
}

export default BlockHeader;
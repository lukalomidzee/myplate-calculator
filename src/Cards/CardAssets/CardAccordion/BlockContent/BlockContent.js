import './BlockContent.css';

function BlockContent(props) {
    return(
        <div className="block-content">
            {props.content}
        </div>
    );
}

export default BlockContent;
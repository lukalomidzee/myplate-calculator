import './BlockContent.css';

function BlockContent(props) {
    return(
        <div class="block-content">
            {props.content}
        </div>
    );
}

export default BlockContent;
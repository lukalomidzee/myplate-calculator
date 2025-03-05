import './CardBody.css';

function CardBody(props){
    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.paragraph}</p>
        </div>
    );
}

export default CardBody;
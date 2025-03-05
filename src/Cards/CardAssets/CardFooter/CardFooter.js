import './CardFooter.css';

function CardFooter(props){
    return (
        <div className='cardFooter'>
            <p className='footerParagraph'>{props.title}</p>
        </div>
    );
}

export default CardFooter;
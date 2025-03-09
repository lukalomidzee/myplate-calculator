import BlockContent from '../BlockContent/BlockContent';
import BlockHeader from '../BlockHeader/BlockHeader';
import './AccordionBlock.css';

function AccordionBlock(props){
    return (
        <div className='accordion-block'>
            {/* Heading */}
            <BlockHeader header={props.header} result=""/>
            {/* Content */}
            <BlockContent content={props.content}/>
        </div>
    );

}

export default AccordionBlock;
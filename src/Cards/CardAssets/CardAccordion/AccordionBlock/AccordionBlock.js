import BlockContent from '../BlockContent/BlockContent';
import BlockHeader from '../BlockHeader/BlockHeader';
import './AccordionBlock.css';

function AccordionBlock(props){
    <div className='accordion-block'>
        {/* Heading */}
        {props.header}
        <BlockHeader header={props.header}/>
        {/* Content */}
        <BlockContent content={props.content}/>
    </div>
}

export default AccordionBlock;
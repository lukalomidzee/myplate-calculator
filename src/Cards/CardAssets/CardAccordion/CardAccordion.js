import { useState } from 'react';
import AccordionBlock from './AccordionBlock/AccordionBlock';
import Selector from '../Selector/Selector';
import { ageSelector, sexSelector } from '../Selector/SelectorValues';
import './CardAccordion.css';

function CardAccordion(props){
    
    let [age, setAge] = useState(0);
    let [sex, setSex] = useState('');

    return (
        <div>
            <AccordionBlock header="Age & Sex" 
            content={
                <div style={styles.container}>
                    <Selector hint="Age" sel    ectValues={ageSelector} onChange={(e) => {
                        setAge(e.target.value);
                    }}/>
                    <Selector hint="Select Sex" selectValues={sexSelector} onChange={(e) => {
                        setSex(e.target.value);
                    }}/>
                </div>
            }/>
        </div>
    );
}

export default CardAccordion;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "0.5rem",
        overflowY: 'visible',
        marginBottom: '0.5rem',
    }
}

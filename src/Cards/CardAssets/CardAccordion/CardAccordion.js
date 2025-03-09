import { useState } from 'react';
import AccordionBlock from './AccordionBlock/AccordionBlock';
import Selector from '../Selector/Selector';
import { ageSelector, sexSelector } from '../Selector/SelectorValues';
import './CardAccordion.css';
import Button from '../Button/Button';

function CardAccordion(props){
    
    let [age, setAge] = useState(0);
    let [sex, setSex] = useState('');

    function sectionTwo(){
        console.log("Section two")
    }

    return (
        <div style={styles.outDiv}>
            <AccordionBlock header=
            {
                <div>
                    <h1>
                        Age & Sex
                    </h1>
                    <p>
                        Please provide data accordingly to calculate proper results. <br /><br /><b>NOTE:</b> No personal information is being stored
                    </p>
                </div>
            } 
            content={
                <div style={styles.container}>
                    <Selector hint="Age" sel    selectValues={ageSelector} onChange={(e) => {
                        setAge(e.target.value);
                    }}/>
                    <Selector hint="Select Sex" selectValues={sexSelector} onChange={(e) => {
                        setSex(e.target.value);
                    }}/>
                </div>
            }/>
            <Button onClick={sectionTwo} title="Next"/>
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
    },

    outDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "2rem",
    }
}

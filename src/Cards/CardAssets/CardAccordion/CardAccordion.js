import AccordionBlock from './AccordionBlock/AccordionBlock';
import Selector from '../Selector/Selector';
import { ageSelector, sexSelector } from '../Selector/SelectorValues';
import './CardAccordion.css';
import Button from '../Button/Button';

function CardAccordion(props){
    let userDetails = props.userDetails;
    let setUserDetails = props.setUserDetails;

    console.log(userDetails);

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
                        Please provide data accordingly to calculate correct results. <br /><br /><b>NOTE:</b> No personal information is being stored
                    </p>
                </div>
            } 
            content={
                <div style={styles.container}>
                    <Selector hint="Age" selectValues={ageSelector} onChange={(e) => {
                        setUserDetails(prev => ({...prev, age: e.target.value}));
                    }}/>
                    <Selector hint="Select Sex" selectValues={sexSelector} onChange={(e) => {
                        setUserDetails(prev => ({...prev, sex: e.target.value}));
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

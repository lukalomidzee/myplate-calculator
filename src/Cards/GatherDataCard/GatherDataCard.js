// import CardBody from '../CardAssets/CardBody/CardBody';
import { useState } from 'react';
import CardAccordion from '../CardAssets/CardAccordion/CardAccordion';
// import CardFooter from '../CardAssets/CardFooter/CardFooter';
import CardHeader from '../CardAssets/CardHeader/CardHeader';
// import Selector from '../CardAssets/Selector/Selector';
// import { ageSelector, sexSelector } from '../CardAssets/Selector/SelectorValues';
// import Button from '../CardAssets/Button/Button';
// import { useState } from 'react';

import './GatherDataCard.css'

function GatherDataCard(props){
    const [userDetails, setUserDetails] = useState({
        age: undefined,
        sex: undefined,
        weight: undefined,
        height: undefined,
        activityLevel: undefined,
        pregnant: undefined,
        pregnancyTrimester: undefined,
        breastfeeding: undefined,
        breastfeedingAmount: undefined,
        breastfeedingTime: undefined,
        finalCalories: 0,
        low: 0,
        mid: 0,
        high: 0,
        // selectedActivity: undefined,
    })

    return (
        <section className='gather-data card' id='gather-data'>
            <CardHeader backButton='Back' header='Calculate Your MyPlate Plan' changeState={props.changeState}/>
            <CardAccordion userDetails={userDetails} setUserDetails={setUserDetails} />
            {/* <CardBody header="Age & Sex" paragraph={["Please provide data from the following sections to calculate result properly. ", "No personal information is stored"]}/>
            <div style={styles.container}>
                <Selector hint="Age" sel    ectValues={ageSelector} onChange={(e) => {
                    setAge(e.target.value);
                }}/>
                <Selector hint="Select Sex" selectValues={sexSelector} onChange={(e) => {
                    setSex(e.target.value);
                }}/>
            </div>
            <Button onClick={customFunction} title="Next" /> */}
            {/* <CardFooter /> */}
            <div></div>
        </section>
    )
}

// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: "0.5rem",
//         overflowY: 'visible',
//         marginBottom: '0.5rem',
//     }
// }


export default GatherDataCard;
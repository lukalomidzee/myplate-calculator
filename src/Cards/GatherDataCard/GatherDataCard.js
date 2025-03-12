import { useState } from 'react';
import CardAccordion from '../CardAssets/CardAccordion/CardAccordion';
import CardHeader from '../CardAssets/CardHeader/CardHeader';

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
    })

    return (
        <section className='gather-data card' id='gather-data'>
            <CardHeader backButton='Back' header="GNSPEN" changeState={props.changeState}/>
            <CardAccordion userDetails={userDetails} setUserDetails={setUserDetails} />
            <div></div>
        </section>
    )
}

export default GatherDataCard;
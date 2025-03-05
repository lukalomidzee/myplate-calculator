import React from 'react';
import './IntroductionCard.css';
import CardHeader from '../CardAssets/CardHeader/CardHeader';
import CardFooter from '../CardAssets/CardFooter/CardFooter';
import CardBody from '../CardAssets/CardBody/CardBody';
import Button from '../CardAssets/Button/Button';

function IntroductionCard() { 

    function getStarted(){
        document.getElementById('introduction').classList.add('hidden');
        document.getElementById('gather-data').classList.remove('hidden');
        document.getElementById('form').style.backgroundPositionY = '12.5%';
    }
    
    return (
        <section className='introduction' id="introduction">
            <CardHeader />
            <CardBody 
                header="Calculate Your MyPlate Plan" 
                paragraph="The MyPlate Plan* shows you what and how much to eat from the food groups over the course of a day. MyPlate Plans are available in multiple languages and have been culturally adapted to reflect the foods of these cultures."
            />
            <Button onClick={getStarted} title="Get Started!" />
            <CardFooter title={
                '*For more information on how the MyPlate Plan calculator uses different formulas to create your plan, please visit MyPlate.gov.'
            }/>
        </section>
    );
}

export default IntroductionCard;
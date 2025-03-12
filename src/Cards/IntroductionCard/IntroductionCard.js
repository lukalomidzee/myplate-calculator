import React from 'react';
import './IntroductionCard.css';
import CardHeader from '../CardAssets/CardHeader/CardHeader';
import CardFooter from '../CardAssets/CardFooter/CardFooter';
import CardBody from '../CardAssets/CardBody/CardBody';
import Button from '../CardAssets/Button/Button';

function IntroductionCard(props) {
    return (
        <section className='introduction card' id="introduction">
            <CardHeader classList={"introduction-header"} header="GNSPEN"/>
            <CardBody 
                header="გამოთვალე შენი MyPlate გეგმა" 
                paragraph="MyPlate გეგმა გვიჩვენებს თუ რა ტიპის და რა რაოდენობის საკვები უნდა მივირთვათ დღის განმავლობაში, ჩვენს ფიზიკურ მონაცემებზე დაყრდნობით. გეგმა მოიცავს სხვადასხვა ტიპის საკვების ფართო სპექტრს."
            />
            <Button onClick={props.changeState} title="დაწყება!" />
            <CardFooter title={
                '*დამატებითი ინფორმაციისთვის ეწვიეთ ჩვენს ვებ-გვერდს'
            }/>
        </section>
    );
}

export default IntroductionCard;
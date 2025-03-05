import CardBody from '../CardAssets/CardBody/CardBody';
import CardFooter from '../CardAssets/CardFooter/CardFooter';
import CardHeader from '../CardAssets/CardHeader/CardHeader';
import Selector from '../CardAssets/Selector/Selector';

import './GatherDataCard.css'

function GatherDataCard(props){

    return (
        <section className='hidden gather-data' id='gather-data'>
            <CardHeader backButton='Back' header='Calculate Your MyPlate Plan' />
            <CardBody header="Age & Sex" paragraph="Please select" />
            <Selector hint="Age"/>
            <CardFooter />
        </section>
    )
}

export default GatherDataCard;
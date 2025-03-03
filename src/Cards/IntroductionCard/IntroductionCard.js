import './IntroductionCard.css';
import CardHeader from '../CardAssets/CardHeader/CardHeader';
import CardFooter from '../CardAssets/CardFooter/CardFooter';

function IntroductionCard() {
    return (
        <div className='introduction'>
            <CardHeader />
            <CardFooter title={
                '*For more information on how the MyPlate Plan calculator uses different formulas to create your plan, please visit MyPlate.gov.'
            }/>
        </div>
    );
}

export default IntroductionCard;
import './CardHeader.css'
import usdaIcon from '../../../assets/icons/logo-usda.CUpBftSY.png';
import plateIcon from '../../../assets/icons/myplate-brand.svg';

function CardHeader(){
    return (
        <div className="cardHeader">
            <img src={usdaIcon} className='headerIcon' alt='usda-icon'/>
            <img src={plateIcon} className='headerIcon' alt='myplate-icon'/>
        </div>
    );

}

export default CardHeader;
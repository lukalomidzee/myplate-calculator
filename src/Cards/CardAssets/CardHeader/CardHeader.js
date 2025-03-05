import './CardHeader.css'
import usdaIcon from '../../../assets/icons/logo-usda.CUpBftSY.png';
import plateIcon from '../../../assets/icons/myplate-brand.svg';
import Button from '../Button/Button';

function CardHeader(props){

    function returnToIntroduction(){
        // document.getElementById('introduction').style.display = 'none';
        document.getElementById('introduction').classList.remove('hidden');
        // document.getElementById('gather-data').classList.add('gather-data');
        document.getElementById('gather-data').classList.add('hidden');
        document.getElementById('form').style.backgroundPositionY = '0%';
    }

    let backButton = props.backButton ? <Button title='Back' onClick={returnToIntroduction} /> : null
    
    let header = props.header ? <h3>{props.header}</h3> : null
    return (
        <div className='cardHeader'>
            {backButton}
            {header}
            <div className="cardHeaderIcons" >
                <img src={usdaIcon} className='headerIcon' alt='usda-icon'/>
                <img src={plateIcon} className='headerIcon' alt='myplate-icon'/>
            </div>
        </div>
    );
}

export default CardHeader;
import './CardHeader.css'
// import mrnutritionlogo from '../../../assets/icons/mrnutritionlogo.PNG';
// import mrnutritionfull from '../../../assets/icons/mrnutritionfull.PNG';
// import usdaIcon from '../../../assets/icons/logo-usda.CUpBftSY.png';
// import plateIcon from '../../../assets/icons/myplate-brand.svg';
import BackButton from '../Button/BackButton';

function CardHeader(props){

    let backButton = props.backButton ? <BackButton title='Back' onClick={props.changeState} /> : null
    
    let header = props.header ? <h1 id='card-header-paragraph' style={{color: "#074e66"}}>{props.header}</h1> : null

    return (
        <div className={`cardHeader ${props.classList || ''}`} >
            {backButton}
            {header}
            
        </div>
    );
}

export default CardHeader;
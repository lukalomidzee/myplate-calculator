import './Form.css';
import IntroductionCard from '../Cards/IntroductionCard/IntroductionCard';
import { useState } from 'react';
import GatherDataCard from '../Cards/GatherDataCard/GatherDataCard';

function Form(){

    let [introduction, setIntroduction] = useState(true);

    function start(){
        document.getElementById('form').style.backgroundPositionY = '12.5%';
        document.getElementById('form').scrollIntoView({behavior: 'smooth', block: 'start'});
        setIntroduction(!introduction);
    }

    function restart(){
        document.getElementById('form').style.backgroundPositionY = '0%';
        document.getElementsByClassName('header')[0].scrollIntoView({behavior: 'smooth', block: 'start'});
        setIntroduction(!introduction);
    }

    return (
        <div className='form-div' id='form'>
            {
            introduction ? 
            (<IntroductionCard changeState={() => start()}/>) : 
            (<GatherDataCard changeState={() => restart()}/>)}
            {/* <IntroductionCard/>
            <GatherDataCard hidden='true'/> */}
        </div>
    );
}

export default Form;
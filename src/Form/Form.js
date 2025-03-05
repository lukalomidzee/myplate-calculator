import './Form.css';
import IntroductionCard from '../Cards/IntroductionCard/IntroductionCard';
import GatherDataCard from '../Cards/GatherDataCard/GatherDataCard';

function Form(){
    return (
        <div className='form-div' id='form'>
            <IntroductionCard />
            <GatherDataCard hidden='true'/>
        </div>
    );
}

export default Form;
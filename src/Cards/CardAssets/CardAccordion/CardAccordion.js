import AccordionBlock from './AccordionBlock/AccordionBlock';
import Selector from '../Selector/Selector';
import { ageSelector, sexSelector } from '../Selector/SelectorValues';
import './CardAccordion.css';
import Button from '../Button/Button';
import { useState } from 'react';

function CardAccordion(props){
    let userDetails = props.userDetails;
    let setUserDetails = props.setUserDetails;

    // let [buttonDisabled, setButtonDisabled] = useState(true);

    
    const [currentStep, setCurrentStep] = useState(1);
    
    function stepFinished(){
        console.log(userDetails);
        //#region Under 2 years
        if (userDetails.age <= 2){
            switch (userDetails.age) {
                case 1:
                    userDetails.finalCalories = "800";
                    break;
                case 1.25:
                    userDetails.finalCalories = userDetails.sex === "male" ? "900" : "800";
                    break;
                case 1.5:
                    userDetails.finalCalories = userDetails.sex === "male" ? "1000" : "900";
                    break;
                default:
                    userDetails.finalCalories = "1000"
                }
            setCurrentStep(6);
        }
        //#endregion
        //#region 2-8 years
        else if (userDetails.age <= 8){
            if (userDetails.sex === "male")
                switch (userDetails.age) {
                case 2:
                    userDetails.low = 1000;
                    userDetails.mid = 1000;
                    userDetails.high = 1000;
                    break;
                case 3:
                    userDetails.low = 1000;
                    userDetails.mid = 1400;
                    userDetails.high = 1400;
                    break;
                case 4:
                    userDetails.low = 1000;
                    userDetails.mid = 1400;
                    userDetails.high = 1400;
                    break;
                case 5:
                    userDetails.low = 1200;
                    userDetails.mid = 1400;
                    userDetails.high = 1600;
                    break;
                case 6:
                    userDetails.low = 1200;
                    userDetails.mid = 1400;
                    userDetails.high = 1600;
                    break;
                case 7:
                    userDetails.low = 1400;
                    userDetails.mid = 1600;
                    userDetails.high = 1800;
                    break;
                case 8:
                    userDetails.low = 1400;
                    userDetails.mid = 1600;
                    userDetails.high = 2000;
                    break;
                }
            else
                switch (userDetails.age) {
                case 2:
                    userDetails.low = 1000;
                    userDetails.mid = 1000;
                    userDetails.high = 1000;
                    break;
                case 3:
                    userDetails.low = 1000;
                    userDetails.mid = 1200;
                    userDetails.high = 1400;
                    break;
                case 4:
                    userDetails.low = 1200;
                    userDetails.mid = 1400;
                    userDetails.high = 1400;
                    break;
                case 5:
                    userDetails.low = 1200;
                    userDetails.mid = 1400;
                    userDetails.high = 1400;
                    break;
                case 6:
                    userDetails.low = 1200;
                    userDetails.mid = 1400;
                    userDetails.high = 1600;
                    break;
                case 7:
                    userDetails.low = 1200;
                    userDetails.mid = 1600;
                    userDetails.high = 1800;
                    break
                case 8:
                    userDetails.low = 1400;
                    userDetails.mid = 1600;
                    userDetails.high = 1800;
                    break;
            }
            setCurrentStep(5);
        //#endregion
        }
        setCurrentStep(2);
    }

    const [firstSelection, setFirstSelection] = useState("");
    const [secondSelection, setSecondSelection] = useState("");
    const isButtonDisabled = !(firstSelection && secondSelection);

    return (
        
        <div style={styles.outDiv}>
            {currentStep === 1 && 
                (
                    <AccordionBlock header=
                    {
                        <div>
                            <h1>
                                Age & Sex
                            </h1>
                            <p>
                                Please provide data accordingly to calculate correct results. <br /><br /><b>NOTE:</b> No personal information is being stored
                            </p>
                        </div>
                    } 
                    content={
                        <div style={styles.container}>
                            
                            
                            <Selector hint="Age" selectValues={ageSelector} onChange={(e) => {
                                setUserDetails(prev => ({...prev, age: e.target.value}));
                                setFirstSelection(e.target.value);
                            }}/>
                            <Selector hint="Select Sex" selectValues={sexSelector} onChange={(e) => {
                                setUserDetails(prev => ({...prev, sex: e.target.value}));
                                setSecondSelection(e.target.value);
                            }}/>
                            <br />
                            <Button id="age-sex-button" disabled={isButtonDisabled} onClick={stepFinished} title="Next"/>
                        </div>
                    }/>
                )
        
            }
            {currentStep === 2 && (
                <AccordionBlock header=
                {
                    <div>
                        <h1>
                            Age & Sex
                        </h1>
                        <p>
                            Please provide data accordingly to calculate correct results. <br /><br /><b>NOTE:</b> No personal information is being stored
                        </p>
                    </div>
                } 
                content={
                    <div style={styles.container}>
                        
                        
                        <Selector hint="Age" selectValues={ageSelector} onChange={(e) => {
                            setUserDetails(prev => ({...prev, age: e.target.value}));
                            setFirstSelection(e.target.value);
                        }}/>
                        <Selector hint="Select Sex" selectValues={sexSelector} onChange={(e) => {
                            setUserDetails(prev => ({...prev, sex: e.target.value}));
                            setSecondSelection(e.target.value);
                        }}/>
                        <br />
                        <Button id="age-sex-button" disabled={isButtonDisabled} onClick={stepFinished} title="Next"/>
                    </div>
                }/>
            )}
            {/* <Button disabled={buttonDisabled} onClick={sectionTwo} title="Next"/> */}
        </div>
    );
}

export default CardAccordion;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "0.5rem",
        overflowY: 'visible',
        marginBottom: '0.5rem',
    },

    outDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "2rem",
    }
}

import AccordionBlock from './AccordionBlock/AccordionBlock';
import Selector from '../Selector/Selector';
import { ageSelector, sexSelector, pregnancyBreastfeedingSelector, trimesterSelector, breastfeedingAmount, breastfeedingTime, activitySelector } from '../Selector/SelectorValues';
import './CardAccordion.css';
import Button from '../Button/Button';
import { useState } from 'react';
import Input from '../Input/Input';
import calculateCalories from './calculateCalories';

function CardAccordion(props){
    let userDetails = props.userDetails;
    let setUserDetails = props.setUserDetails;

    let ageGroup = undefined;
    
    const [currentStep, setCurrentStep] = useState(1);

    function finalResults(){
        if (userDetails.age < 2){
            ageGroup = "0-1";
        }
        else if (userDetails.age < 4){
            ageGroup = "2-3";
        }
        else if (userDetails.age < 9){
            ageGroup = "4-8";
        }
        else if (userDetails.age < 14){
            ageGroup = "9-13";
        }
        else {
            ageGroup = "14-99";
        }
        window.location.href = `https://www.myplate.gov/myplate-plan/results/english/${ageGroup}/${userDetails.finalCalories}`;
    }
    
    function stepFinished(){
        //#region background movement
        let backgroundPosition = parseFloat(document.getElementById('form').style.backgroundPositionY);
        backgroundPosition += 12.5;
        document.getElementById('form').style.backgroundPositionY = backgroundPosition + '%';
        //#endregion
 
        //#region Under 2 years - No need to calculate additional details
        if (userDetails.age <= 2){
            switch (userDetails.age) {
                case "1":
                    userDetails.finalCalories = "800";
                    break;
                case "1.25":
                    userDetails.finalCalories = userDetails.sex === "male" ? "900" : "800";
                    break;
                case "1.5":
                    userDetails.finalCalories = userDetails.sex === "male" ? "1000" : "900";
                    break;
                default:
                    userDetails.finalCalories = "1000"
                }
            setCurrentStep(7);
            return;
        }
        //#endregion
        //#region 2-8 years - first, we determine sex and then activity level
        else if (userDetails.age <= 8){
            if (userDetails.activityLevel === undefined){
                if (userDetails.sex === "male")
                    switch (parseInt(userDetails.age)) {
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
                    default:
                        userDetails.low = 1200;
                        userDetails.mid = 1400;
                        userDetails.high = 1600;
                        break;
                    }
                else
                    switch (parseInt(userDetails.age)) {
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
                    default:
                        userDetails.low = 1200;
                        userDetails.mid = 1400;
                        userDetails.high = 1400;
                        break;
                }
                setCurrentStep(6);
                return;
            } else {
                userDetails.finalCalories = userDetails[userDetails.activityLevel];
                setCurrentStep(7);
                return;
            }
        }
        //#endregion
        //#region Age over 8 years
        else {
            
            //#region Women 14-50
            if ((userDetails.age >= 14 && userDetails.age <= 50) && userDetails.sex === "female" ){
                if (userDetails.pregnant === undefined && userDetails.breastFeeding === undefined){
                    setCurrentStep(3);
                    return;
                }
                else if (userDetails.pregnant === true && userDetails.pregnancyTrimester === undefined){
                    setCurrentStep(4);
                    return;
                }
                else if (userDetails.breastfeeding === true && userDetails.breastfeedingAmount === undefined && userDetails.breastfeedingTime === undefined){
                    setCurrentStep(5);
                    return;
                }
                else if (userDetails.weight === undefined && userDetails.height === undefined){
                    setCurrentStep(2);
                    return
                }
                else if (userDetails.activityLevel === undefined){
                    setCurrentStep(6);
                    return
                }
                else {
                    userDetails.finalCalories = calculateCalories(userDetails);
                    setCurrentStep(7);
                    return
                }
            }
            //#endregion
            //#region Men over 8
            else {
                if (userDetails.weight === undefined && userDetails.height === undefined){
                    setCurrentStep(2);
                    return
                }
                else if (userDetails.activityLevel === undefined){
                    setCurrentStep(6);
                    return
                }
                else {
                    userDetails.finalCalories = calculateCalories(userDetails);
                    setCurrentStep(7);
                    return
                }
            }
            //#endregion
        }
        //#endregion
    }

    //#region Selectors and inputs
    //#region First section button
    const [stepOnefirstSelection, setStepOneFirstSelection] = useState("");
    const [stepOnesecondSelection, setStepOneSecondSelection] = useState("");
    const isFirstButtonDisabled = !(stepOnefirstSelection && stepOnesecondSelection);
    //#endregion

    //#region Second section button
    const [isHeightValid, setIsHeightValid] = useState(false);
    const [isWeightValid, setIsWeightValid] = useState(false);
    const [isSecondButtonDisabled, setIsSecondButtonDisabled] = useState(true);

    const [heightTouched, setHeightTouched] = useState(false);
    const [weightTouched, setWeightTouched] = useState(false);
    // Height Validation
    const handleHeightChange = (e) => {
        setHeightTouched(true);
        const value = parseInt(e.target.value, 10);
        const valid = value >= 100 && value <= 300;
        setIsHeightValid(valid);
        updateButtonState(valid, isWeightValid);
        if (valid){
            setUserDetails(prev => ({...prev, height: e.target.value}));
        }
    };

    // Weight Validation
    const handleWeightChange = (e) => {
        setWeightTouched(true);
        const value = parseInt(e.target.value, 10);
        const valid = value >= 14 && value <= 630;
        setIsWeightValid(valid);
        updateButtonState(isHeightValid, valid);
        if (valid){
            setUserDetails(prev => ({...prev, weight: e.target.value}));
        }
    };

    // Enable button only when both inputs are valid
    const updateButtonState = (heightValid, weightValid) => {
        setIsSecondButtonDisabled(!(heightValid && weightValid));
    };
    //#endregion

    //#region Third section button
    const [stepThreefirstSelection, setStepThreeFirstSelection] = useState("");
    const isThirdButtonDisabled = !(stepThreefirstSelection);
    //#endregion

    //#region Fourth section button
    const [stepFourfirstSelection, setStepFourFirstSelection] = useState("");
    const isFourthButtonDisabled = !(stepFourfirstSelection);
    //#endregion
    
    //#region Fifth section button
    const [stepFivefirstSelection, setStepFiveFirstSelection] = useState("");
    const [stepFivesecondSelection, setStepFiveSecondSelection] = useState("");
    const isFifthButtonDisabled = !(stepFivefirstSelection && stepFivesecondSelection);
    //#endregion
    
    //#region Sixth section button
    
    //#endregion
    const [stepSixfirstSelection, setStepSixFirstSelection] = useState("");
    const isSixthButtonDisabled = !(stepSixfirstSelection);
    //#endregion

    return (
        
        <div className="card-accordion" style={styles.outDiv}>
            {/* 1st step */}
            {currentStep === 1 && 
                (
                    <AccordionBlock header=
                    {
                        <div>
                            <h1>
                                ასაკი & სქესი
                            </h1>
                            <p>
                                გთხოვთ მოგვაწოდოთ სწორი ინფორმაცია ზუსტი შედეგის მისაღებად. <br /><br /><b>შენიშვნა:</b> თქვენი პირადი მონაცემები არ ინახება აპლიკაციაში
                            </p>
                        </div>
                    } 
                    content={
                        <div style={styles.container}>
                            
                            
                            <Selector hint="ასაკი" selectValues={ageSelector} onChange={(e) => {
                                setUserDetails(prev => ({...prev, age: e.target.value}));
                                setStepOneFirstSelection(e.target.value);
                            }}/>
                            <Selector hint="სქესი" selectValues={sexSelector} onChange={(e) => {
                                setUserDetails(prev => ({...prev, sex: e.target.value}));
                                setStepOneSecondSelection(e.target.value);
                            }}/>
                            <br />
                            <Button id="age-sex-button" disabled={isFirstButtonDisabled} onClick={stepFinished} title="შემდეგი"/>
                        </div>
                    }/>
                )
            }
            {/* 1st step */}


            {/* 2nd step */}
            {currentStep === 2 && 
                (
                    <AccordionBlock
                        header={<h1>სიმაღლე & წონა</h1>}
                        content={
                            <div style={styles.container}>
                                {/* Height Input */}
                                <Input
                                    id="height-input"
                                    name="სიმაღლე (CM)"
                                    type="number"
                                    min={100}
                                    max={300}
                                    style={{ outline: heightTouched && !isHeightValid ? "2px solid red" : "none" }}
                                    onChange={handleHeightChange}
                                />
                                <div style={{height: '2rem'}}>
                                    {heightTouched && !isHeightValid && (
                                        <p style={{ color: "red", margin: 0, marginBottom: "0.5rem", fontSize: "0.8rem" }}>სიმაღლის დასაშვები ფარგლებია 100-300 cm</p>
                                    )}
                                </div>

                                {/* Weight Input */}
                                <Input
                                    id="weight-input"
                                    name="წონა (KG)"
                                    type="number"
                                    min={14}
                                    max={630}
                                    style={{ outline: weightTouched && !isWeightValid ? "2px solid red" : "none" }}
                                    onChange={handleWeightChange}
                                />
                                <div style={{height: '2rem'}}>
                                    {weightTouched && !isWeightValid && (
                                        <p style={{ color: "red", margin: 0, fontSize: "0.8rem" }}>წონის დასაშვები ფარგლებია 14-630 kg</p>
                                    )}
                                </div>

                                <br />
                                <Button
                                    id="height-weight-button"
                                    disabled={isSecondButtonDisabled}
                                    onClick={stepFinished}
                                    title="Next"
                                />
                            </div>
                        }
                    />
        
                    // <AccordionBlock header=
                    // {
                    //     <div>
                    //         <h1>
                    //             Height & Weight
                    //         </h1>
                    //     </div>
                    // } 
                    // content={
                    //     <div style={styles.container}>
                    //         <Input id="height-input" name="Height(CM)" min={100} max={300} onChange={setStepTwoFirstSelection}/>
                            
                    //         <Input id="weight-input" name="Weight(KG)" min={14} max={630} onChange={setStepTwoSecondSelection}/>
                            
                    //         <br />
                    //         <Button id="height-weight-button" disabled={isSecondButtonDisabled} onClick={stepFinished} title="Next"/>
                    //     </div>
                    // }/>
                )
            }
            {/* 2nd step */}

            {/* 3rd step */}
            {currentStep === 3 && 
                (
                    <AccordionBlock header=
                    {
                        <div>
                            <h1>
                                ორსულობა და ძუძუთი კვება
                            </h1>
                            <p>
                                აირჩიეთ თქვენთვის შესაბამისი ინფორმაცია
                            </p>
                        </div>
                    } 
                    content={
                        <div style={styles.container}>
                            
                            
                            <Selector hint="..." selectValues={pregnancyBreastfeedingSelector} onChange={(e) => {
                                if (e.target.value === "pregnant"){
                                    setUserDetails(prev => ({
                                        ...prev, pregnant: true,
                                        breastfeeding: false,
                                        breastfeedingAmount: null,
                                        breastfeedingTime: null,
                                    }));    
                                }
                                else if (e.target.value === "breastfeeding"){
                                    setUserDetails(prev => ({
                                        ...prev, breastfeeding: true,
                                        pregnant: false, 
                                        pregnancyTrimester: null,
                                    }));
                                }
                                else {
                                    setUserDetails(prev => ({
                                        ...prev, 
                                        pregnant: false, 
                                        pregnancyTrimester: null,
                                        breastfeeding: false,
                                        breastfeedingAmount: null,
                                        breastfeedingTime: null,
                                    }));
                                }
                                setStepThreeFirstSelection(e.target.value);
                            }}/>
                            
                            <br />
                            <Button id="pregnancy-breastfeeding-button" disabled={isThirdButtonDisabled} onClick={stepFinished} title="შემდეგი"/>
                        </div>
                    }/>
                )
            }
            {/* 3rd step */}

            {/* 4th step */}
            {currentStep === 4 && 
                (
                    <AccordionBlock header=
                    {
                        <div>
                            <h1>
                                აირჩიეთ ტრიმესტრი?
                            </h1>
                        </div>
                    } 
                    content={
                        <div style={styles.container}>
                            
                            
                            <Selector hint="..." selectValues={trimesterSelector} onChange={(e) => {
                                setUserDetails(prev => ({...prev, pregnancyTrimester: e.target.value}));
                                setStepFourFirstSelection(e.target.value);
                            }}/>
                            <br />
                            <Button id="trimester-button" disabled={isFourthButtonDisabled} onClick={stepFinished} title="შემდეგი"/>
                        </div>
                    }/>
                )
            }
            {/* 4th step */}

            {/* 5th step */}
            {currentStep === 5 && 
                (
                    <AccordionBlock header=
                    {
                        <div>
                            <h1>
                                ძუძუთი კვება / ლაქტაცია
                            </h1>
                        </div>
                    } 
                    content={
                        <div style={styles.container}>
                            <h3>მიუთითეთ ლაქტაციის ტიპი</h3>

                            <Selector hint="..." selectValues={breastfeedingAmount} onChange={(e) => {
                                setUserDetails(prev => ({...prev, breastfeedingAmount: e.target.value}));
                                setStepFiveFirstSelection(e.target.value);
                            }}/>

                            <h3>მიუთითეთ ლაქტაციის ხანგრძლივობა</h3>
                            <Selector hint="..." selectValues={breastfeedingTime} onChange={(e) => {
                                setUserDetails(prev => ({...prev, breastfeedingTime: e.target.value}));
                                setStepFiveSecondSelection(e.target.value);
                            }}/>

                            <br />
                            <Button id="breastfeeding-button" disabled={isFifthButtonDisabled} onClick={stepFinished} title="Next"/>
                        </div>
                    }/>
                )
            }
            {/* 5th step */}

            {/* 6th step */}
            {currentStep === 6 && 
                (
                    <AccordionBlock header=
                    {
                        <div>
                            <h1>
                                ფიზიკური აქტივობა
                            </h1>
                        </div>
                    } 
                    content={
                        <div style={styles.container}>
                            <Selector hint="დღეში" selectValues={activitySelector} onChange={(e) => {
                                setUserDetails(prev => ({...prev, activityLevel: e.target.value}));
                                setStepSixFirstSelection(e.target.value);
                            }}/>
                            <br />
                            <Button id="trimester-button" disabled={isSixthButtonDisabled} onClick={stepFinished} title="Next"/>
                        </div>
                    }/>
                )
            }
            {/* 6th step */}



            {/* 7th step */}
            {currentStep === 7 && 
                (
                    <AccordionBlock header=
                    {
                        <div>
                            
                            <h3>
                                {ageSelector[userDetails.age]} / {sexSelector[userDetails.sex]} სქესი
                            </h3>
                            <p>
                                მოწოდებულ ინფორმაციაზე დაყრდნობით, კალორიების დღიური დოზა შეადგენს: <h2 style={{color: "rgb(7, 78, 102)"}}>{userDetails.finalCalories}</h2>
                            </p>
                            <p>
                                დეტალური ინფორმაციის სანახავად მიჰყევით ინსტრუქციას 
                            </p>
                        </div>
                    } 
                    content={
                        <div style={styles.container}>
                            <Button id="view-results" onClick={finalResults} title="შედეგები"/>
                        </div>
                    }/>
                )
            }
            {/* 7th step */}
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

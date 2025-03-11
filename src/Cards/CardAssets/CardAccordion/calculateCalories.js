function calculateCalories(userDetails){

    // calories=base−(ageFactor×age)+(activityFactor×(weightFactor×weight+heightFactor×height))+additional
    // Initialize
    let finalResult = 0;
    
    let constants = {
        base: 0.00,
        ageFactor: 0.00,
        weightFactor: 0.00,
        heightFactor: 0.00,
        activityFactor: { low: 0.00, mid: 0.00, high: 0.00 },
        additional: 0
    }
    
    // Adjust pregnancy
    let pregnantAdditional = {
        1: 0,
        2: 340,
        3: 452
    }

    let breastfeedingAdditional = {
        "all": userDetails.breastfeedingTime === "0-6" ? 330 : 400,
        "half": userDetails.breastfeedingTime === "0-6" ? 70 : 200,
        "some": 0
    }

    // Determine constants
    if (userDetails.sex === 'male'){
        if (userDetails.age <= 18){
            constants.base = 88.5
            constants.ageFactor = 61.9
            constants.weightFactor = 26.7
            constants.heightFactor = 903
            constants.activityFactor = { low: 1, mid: 1.13, high: 1.26 }
        } else {
            constants.base = 662
            constants.ageFactor = 9.53
            constants.weightFactor = 15.91
            constants.heightFactor = 539.6
            constants.activityFactor = { low: 1, mid: 1.12, high: 1.27 }
        }
    } else if (userDetails.sex === 'female'){
        if (userDetails.age <= 18){
            constants.base = 135.3
            constants.ageFactor = 30.8
            constants.weightFactor = 10
            constants.heightFactor = 934
            constants.activityFactor = { low: 1, mid: 1.16, high: 1.31 }
            if (userDetails.pregnant){
                constants.additional = pregnantAdditional[userDetails.pregnancyTrimester]; 
            } else if (userDetails.breastfeeding) {
                constants.additional = breastfeedingAdditional[userDetails.breastfeedingAmount];
            }

        } else {
            constants.base = 354;
            constants.ageFactor = 6.91;
            constants.weightFactor = 9.36;
            constants.heightFactor = 726;
            constants.activityFactor = { low: 1, mid: 1.14, high: 1.27 }
            if (userDetails.pregnant){
                constants.additional = pregnantAdditional[userDetails.pregnancyTrimester]; 
            } else if (userDetails.breastfeeding) {
                constants.additional = breastfeedingAdditional[userDetails.breastfeedingAmount];
            }
        }
    }


    // Calculate result
    
    finalResult = constants.base - (constants.ageFactor * userDetails.age) + 
                (constants.activityFactor[userDetails.activityLevel] * 
                    ((constants.weightFactor * userDetails.weight) + (constants.heightFactor * (userDetails.height/100))))
                    + constants.additional;            
    finalResult = 200 * Math.round(finalResult / 200);
    
    return finalResult;
}

export default calculateCalories;
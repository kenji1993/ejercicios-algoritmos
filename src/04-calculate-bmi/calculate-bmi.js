//  Write function bmi that calculates body mass index (bmi = weight / height2).
//  if bmi <= 18.5 return "Underweight"
//  if bmi <= 25.0 return "Normal"
//  if bmi <= 30.0 return "Overweight"
//  if bmi > 30 return "Obese"


const bmi = (weight, height) => {

    let calculate = weight / (height * height);
    if (calculate <= 18.5) {
        return "Underweight";
    } else if (calculate <= 25.0) {
        return "Normal";
    } else if (calculate <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

module.exports = bmi;
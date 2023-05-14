import rules from "./rules";

const validator = (value, validations) => {
  console.log("validator:", value, validations);

  let validationResult = [];

  for (const validator of validations) {
    if (validator.value === rules.requireValue) {
      value.trim().length === 0 && validationResult.push(false);
    }
    if(validator.value === rules.minValue){
        value.trim().length < validator.min && validationResult.push(false);
    }
    if(validator.value === rules.maxValue){
        value.trim().length > validator.max && validationResult.push(false);
    }
    if(validator.value === rules.emailValue){
        !value.trim().includes('@') && validationResult.push(false)
    }
    
}
console.log(validationResult);
  if(validationResult.length){
    return false
  }else{
    return true
  }
};

export default validator
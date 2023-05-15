const requireValue = "REQUIRE_VALUE";
const minValue = "MIN_VALUE";
const maxValue = "MAX_VALUE";
const emailValue = "EMAIL_VALUE";
const phoneValue = "PHONE_VALUE"
const equalValue = "EQUAL_VALUE"
const unequalValue = "UNEQUAL_VALUE"
export const requireValidator = () => ({
  value: requireValue,
});

export const minValidator = min => ({
  value: minValue,
  min,
});

export const maxValidator = max => ({
  value: maxValue,
  max,
});

export const emailValidator = () => ({
  value: emailValue,
});
export const phoneValidator = () => ({
  value: phoneValue,
});
export const equalValidator = (firstValue) => ({
  value: equalValue,
  firstValue,

});
export const unequalValidator = (firstValue) => ({
  value: unequalValue,
  firstValue,

});

export default { requireValue, maxValue, minValue, emailValue,phoneValue,equalValue ,unequalValue};

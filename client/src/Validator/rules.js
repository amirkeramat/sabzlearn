const requireValue = "REQUIRE_VALUE";
const minValue = "MIN_VALUE";
const maxValue = "MAX_VALUE";
const emailValue = "EMAIL_VALUE";

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

export default { requireValue, maxValue, minValue, emailValue };

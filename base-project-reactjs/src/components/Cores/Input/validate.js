import validator from "validator";

const isRequired = message => value =>
  validator.isEmpty(value) ? message : "";
const isNumber = message => value =>
  value === "" ? "" : validator.isNumeric(value) ? "" : message;
const isEmail = message => value => (validator.isEmail(value) ? "" : message);
const isLongerThanSix = message => value => (value.length < 6 ? message : "");

const combineValidations = arr => value => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = arr[i](value);
    if (result !== "") break;
  }
  return result;
};

export { isRequired, isEmail, isNumber, isLongerThanSix, combineValidations };

// order of error compute will dictate scrollToFirstError order
const validate = (vals) => {
  let errors = {};

  if (!vals.age) {
    errors.age = "Required";
  }

  if (!vals.gender) {
    errors.gender = "Required";
  }

  if (!vals.heightFt) {
    errors.heightFt = "Required";
  }

  if (!vals.heightIn) {
    errors.heightIn = "Required";
  }

  if (!vals.weight) {
    errors.weight = "Required";
  }

  if (!vals.activity) {
    errors.activity = "Required";
  }

  if (!vals.goal) {
    errors.goal = "Required";
  }

  if (!vals.diet) {
    errors.diet = "Required";
  }

  if (!vals.water) {
    errors.water = "Required";
  }

  return errors;
};

export default validate;

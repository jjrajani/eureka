const validate = (vals) => {
  let errors = {};
  if (!vals.activity) {
    errors.activity = "Required";
  }

  if (!vals.age) {
    errors.age = "Required";
  }

  if (!vals.diet) {
    errors.diet = "Required";
  }

  if (!vals.gender) {
    errors.gender = "Required";
  }

  if (!vals.goal) {
    errors.goal = "Required";
  }

  if (!vals.heightFt) {
    errors.heightFt = "Required";
  }

  if (!vals.heightIn) {
    errors.heightIn = "Required";
  }

  if (!vals.water) {
    errors.water = "Required";
  }

  if (!vals.weight) {
    errors.weight = "Required";
  }

  return errors;
};

export default validate;

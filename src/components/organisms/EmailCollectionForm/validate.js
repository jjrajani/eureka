const validate = (vals) => {
  let errors = {};

  if (!vals.first) {
    errors.first = "Required";
  }

  if (!vals.last) {
    errors.last = "Required";
  }

  if (!vals.email) {
    errors.email = "Required";
  }

  return errors;
};

export default validate;

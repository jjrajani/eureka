const validate = (vals) => {
  let errors = {};
  if (!vals.email) {
    errors.email = "Required";
  }

  if (!vals.first) {
    errors.first = "Required";
  }

  if (!vals.last) {
    errors.last = "Required";
  }

  return errors;
};

export default validate;

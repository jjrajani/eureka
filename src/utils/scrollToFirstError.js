const scrollToFirstError = (errors) => {
  const errorFields = getErrorFieldNames(errors);
  // Using breakable for loop
  for (let i = 0; i < errorFields.length; i++) {
    const fieldName = `${errorFields[i]}`;
    // Checking if the marker exists in DOM
    let elements = document.querySelectorAll(`[name="${fieldName}"]`);
    if (elements.length) {
      console.dir(elements[0]);
      elements[0].scrollIntoView({ block: "center", behavior: "smooth" });
      break;
    }
  }
};

const getErrorFieldNames = (obj, name = "") => {
  const errorArr = [];
  errorArr.push(
    Object.keys(obj)
      .map((key) => {
        const next = obj[key];
        if (next) {
          if (typeof next === "string") {
            return name + key;
          }
          // Keep looking
          if (next.map) {
            errorArr.push(
              next
                .map((item, index) =>
                  getErrorFieldNames(item, `${name}${key}[${index}].`)
                )
                .filter((o) => o)
            );
          }
        }
        return null;
      })
      .filter((o) => o)
  );
  return flatten(errorArr);
};

const flatten = (arr) => {
  return arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );
};

export default scrollToFirstError;

export const hasProp = (obj, prop, returnVal) => {
  if (!obj) {
    return false;
  }
  let propFound = false;
  let accrs = prop.split(".");
  let i = 0;
  while (i < accrs.length) {
    if (!obj) {
      break;
    }
    obj = obj[accrs[i]];
    i++;
  }

  if (obj || obj === false) {
    propFound = true;
  }

  return returnVal ? obj : propFound;
};

export const getVal = (obj, prop) => {
  const returnVal = true;
  const val = hasProp(obj, prop, returnVal);

  return val ? val : null;
};

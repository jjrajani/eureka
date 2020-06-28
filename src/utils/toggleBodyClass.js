const toggleBodyClass = (classToToggle, addClass) => {
  if (addClass) {
    document.body.classList.add(classToToggle);
  } else {
    document.body.classList.remove(classToToggle);
  }
};

export default toggleBodyClass;

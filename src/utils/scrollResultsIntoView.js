const scrollResultsIntoView = () => {
  let results = document.getElementById("react-results");
  if (results) {
    results.scrollIntoView({ behavior: "smooth" });
  }
};

export default scrollResultsIntoView;

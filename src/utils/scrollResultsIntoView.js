const scrollResultsIntoView = () => {
  let results = document.getElementById("react-results");
  if (results) {
    results.scrollIntoView({ behavior: "smooth", block: "end" });
  }
};

export default scrollResultsIntoView;

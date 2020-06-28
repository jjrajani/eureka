const scrollResultsIntoView = () => {
  let results = document.getElementById("react-results");
  if (results) {
    console.log(results.offsetTop + results.offsetHeight);
    results.scrollIntoView({ behavior: "smooth", block: "end" });
  }
};

export default scrollResultsIntoView;

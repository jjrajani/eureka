const scrollResultsIntoView = () => {
  let results = document.getElementById("react-results");

  if (results) {
    var bodyRect = document.body.getBoundingClientRect(),
      elemRect = results.getBoundingClientRect(),
      resultsOffset = elemRect.top - bodyRect.top;

    window.scroll({
      top: resultsOffset,
      behavior: "smooth",
    });
  }
};

export default scrollResultsIntoView;

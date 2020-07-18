const scrollResultsIntoView = () => {
  let results = document.getElementById("react-results");
  let wpTopHeader = document.getElementById("top-header");
  let wpMainHeader = document.getElementById("main-header");
  if (results) {
    var bodyRect = document.body.getBoundingClientRect(),
      elemRect = results.getBoundingClientRect(),
      resultsOffset = elemRect.top - bodyRect.top;

    if (wpTopHeader && wpMainHeader && window.innerWidth > 980) {
      resultsOffset -= wpTopHeader.clientHeight + wpMainHeader.clientHeight;
    }
    console.log("resultsOffset", resultsOffset);

    window.scroll({
      top: resultsOffset,
      behavior: "smooth",
    });
    // results.scrollIntoView({ behavior: "smooth" });
  }
};

export default scrollResultsIntoView;

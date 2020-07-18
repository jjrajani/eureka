import React from "react";
import PropTypes from "prop-types";
import String from "../../atoms/String";

const DownloadResultsButton = ({
  didDismiss,
  openEmailCollectionModal,
  downloadResults,
  results,
  mealPlannerInput,
}) => {
  return !didDismiss ? (
    <button
      type="button"
      data-toggle="modal"
      data-target="#email-collection"
      onClick={openEmailCollectionModal}
    >
      <String textKey="downloadButtonText" />
    </button>
  ) : (
    <button
      type="button"
      onClick={downloadResults.bind(this, results, mealPlannerInput)}
    >
      <String textKey="downloadButtonText" />
    </button>
  );
};

DownloadResultsButton.defaultProps = {};
DownloadResultsButton.propTypes = {
  didDismiss: PropTypes.bool.isRequired,
  openEmailCollectionModal: PropTypes.func.isRequired,
  downloadResults: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired,
  mealPlannerInput: PropTypes.object.isRequired,
};

export default DownloadResultsButton;

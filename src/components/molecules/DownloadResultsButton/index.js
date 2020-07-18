import DownloadResultsButton from "./ui-component";
import { connect } from "react-redux";
import { showModal } from "../../../actions/modal";
import modifyAndOpenPDF from "../../../utils/modifyAndOpenPDF";

const mapStateToProps = (state) => ({
  mealPlannerInput: state.form.mealPlanner.values,
  results: state.mealPlanner.results,
  didDismiss: state.emailCollectionForm.didDismiss,
  loading: state.mealPlanner.loading,
});

const mapDispatchToProps = (dispatch) => ({
  downloadResults: async (results, info) =>
    await modifyAndOpenPDF(results, info),
  openEmailCollectionModal: () =>
    dispatch(showModal({ show: true, showId: "email-collection" })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DownloadResultsButton);

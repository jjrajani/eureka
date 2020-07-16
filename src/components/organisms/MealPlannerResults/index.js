import MealPlannerResults from "./ui-component";
import { connect } from "react-redux";
import { initModal, showModal } from "../../../actions/modal";
import modifyAndOpenPDF from "../../../utils/modifyAndOpenPDF";

const mapStateToProps = (state) => ({
  mealPlannerInput: state.form.mealPlanner.values,
  results: state.mealPlanner.results,
  didDismiss: state.emailCollectionForm.didDismiss,
});

const mapDispatchToProps = (dispatch) => ({
  initModal: (uiOpts) =>
    dispatch(
      initModal({
        id: "email-collection",
        show: false,
        uiOpts: uiOpts,
      })
    ),
  downloadResults: async (results, info) =>
    await modifyAndOpenPDF(results, info),
  openEmailCollectionModal: () =>
    dispatch(showModal({ show: true, showId: "email-collection" })),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealPlannerResults);

import MealPlannerResults from "./ui-component";
import { connect } from "react-redux";
import { initModal, showModal } from "../../../actions/modal";

const mapStateToProps = (state) => ({
  results: state.mealPlanner.results,
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
  openEmailCollectionModal: () =>
    dispatch(showModal({ show: true, showId: "email-collection" })),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealPlannerResults);

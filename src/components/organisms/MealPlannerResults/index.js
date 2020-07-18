import MealPlannerResults from "./ui-component";
import { connect } from "react-redux";
import { initModal } from "../../../actions/modal";

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
});

export default connect(mapStateToProps, mapDispatchToProps)(MealPlannerResults);

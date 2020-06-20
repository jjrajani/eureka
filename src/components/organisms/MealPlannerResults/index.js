import MealPlannerResults from "./ui-component";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  results: state.mealPlanner.results,
});

export default connect(mapStateToProps)(MealPlannerResults);

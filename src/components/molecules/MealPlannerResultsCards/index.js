import MealPlannerResultsCards from "./ui-component";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  results: state.mealPlanner.results,
  loading: state.mealPlanner.loading,
});

export default connect(mapStateToProps)(MealPlannerResultsCards);

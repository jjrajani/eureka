import MealPlannerForm from "./ui-component";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { calculateResults } from "../../../actions/meal-planner";
import withSizes from "react-sizes";
import { isSV, isLV } from "../../../utils/window/sizes";
import scrollResultsIntoView from "../../../utils/scrollResultsIntoView";
import validate from "./validate";

const submit = (dispatch, vals) => {
  dispatch(calculateResults(vals));
  scrollResultsIntoView();
};

const mapStateToProps = (state) => ({
  ...state.mealPlanner,
  initialValues: {
    activity: "",
    age: "",
    diet: "",
    gender: "",
    goal: "",
    heightFt: "",
    heightIn: "",
    water: "",
    weight: "",
  },
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: submit.bind(this, dispatch),
});

const mapSizesToProps = (sizes) => ({
  isSV: isSV(sizes),
  isLV: isLV(sizes),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withSizes(mapSizesToProps)(
    reduxForm({
      form: "mealPlanner",
      validate,
      // validate,
    })(MealPlannerForm)
  )
);

import MealPlannerForm from "./ui-component";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { calculateResults } from "../../../actions/meal-planner";
import withSizes from "react-sizes";
import { isSV, isLV } from "../../../utils/window/sizes";
import validate from "./validate";

const submit = (dispatch, vals) => {
  dispatch(calculateResults(vals));
};

const mapStateToProps = (state) => ({
  ...state.mealPlanner,
  initialValues: {
    activity: "low",
    age: "23",
    diet: "anything",
    gender: "female",
    goal: "weight-loss",
    heightFt: "6",
    heightIn: "6",
    water: "6",
    weight: "187",
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

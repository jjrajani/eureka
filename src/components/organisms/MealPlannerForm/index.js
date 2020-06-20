import MealPlannerForm from "./ui-component";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { calculateResults } from "../../../actions/meal-planner";

// const validate = (vals) => {
//   console.log("validate", vals);
// };

const submit = (dispatch, vals) => {
  dispatch(calculateResults(vals));
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "mealPlanner",
    // validate,
  })(MealPlannerForm)
);

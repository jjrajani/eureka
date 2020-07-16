import MealPlannerForm from "./ui-component";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { calculateResults } from "../../../actions/meal-planner";
import withSizes from "react-sizes";
import { isSV, isLV } from "../../../utils/window/sizes";
import scrollResultsIntoView from "../../../utils/scrollResultsIntoView";
import validate from "./validate";
import isNodeEnv from "../../../utils/isNodeEnv";

const submit = (dispatch, vals) => {
  dispatch(calculateResults(vals));
  scrollResultsIntoView();
};

const initialValues = isNodeEnv("development")
  ? {
      activity: "High",
      age: "34",
      diet: "Ethnic Specific",
      gender: "Female",
      goal: "Body Recomposition",
      heightFt: "5",
      heightIn: "5",
      water: "12",
      weight: "90",
    }
  : {
      activity: "",
      age: "",
      diet: "",
      gender: "",
      goal: "",
      heightFt: "",
      heightIn: "",
      water: "",
      weight: "",
    };

const mapStateToProps = (state) => ({
  ...state.mealPlanner,
  initialValues,
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

import EmailCollectionModal from "./ui-component";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import {
  closeEmailCollectionModal,
  dismissEmailCollectionForm,
  emailCollectionFormSubmit,
} from "../../../actions/email-collection-form";
import validate from "./validate";
import isNodeEnv from "../../../utils/isNodeEnv";
import scrollToFirstError from "../../../utils/scrollToFirstError";

const submit = (dispatch, vals, mealPlannerInput, results) => {
  dispatch({ type: "EMAIL_COLLECTION_FORM_SUBMIT_START" });
  dispatch(emailCollectionFormSubmit(vals, mealPlannerInput, results));
};

const initialValues = isNodeEnv("development")
  ? { first: "asdf", last: "asdf", email: "fdassdf@asdf.com" }
  : { first: "", last: "", email: "" };

const mapStateToProps = (state) => {
  return {
    opts: state.modal.showId ? state.modal[state.modal.showId] : {},
    show: state.modal.show,
    mealPlannerInput: state.form.mealPlanner.values,
    results: state.mealPlanner.results,
    loading: state.emailCollectionForm.loading,
    didSubscribe: state.emailCollectionForm.didSubscribe,
    didDismiss: state.emailCollectionForm.didDismiss,
    initialValues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (vals, mealPlannerInput, results) =>
      submit(dispatch, vals, mealPlannerInput, results),
    skipSubscribe: () => {
      dispatch(closeEmailCollectionModal());
    },
    dismiss: () => {
      dispatch(dismissEmailCollectionForm());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "emailCollection",
    validate,
    onSubmitFail: (errors) => scrollToFirstError(errors),
    // validate,
  })(EmailCollectionModal)
);

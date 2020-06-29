import EmailCollectionModal from "./ui-component";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import {
  closeEmailCollectionModal,
  dismissEmailCollectionForm,
  emailCollectionFormSubmit,
} from "../../../actions/email-collection-form";
import validate from "./validate";

const submit = (dispatch, vals, results) => {
  dispatch(emailCollectionFormSubmit(vals, results));
};

const mapStateToProps = (state) => {
  return {
    opts: state.modal.showId ? state.modal[state.modal.showId] : {},
    show: state.modal.show,
    results: state.mealPlanner.results,
    loading: state.emailCollectionForm.loading,
    didSubscribe: state.emailCollectionForm.didSubscribe,
    didDismiss: state.emailCollectionForm.didDismiss,
    initialValues: {
      // first: "asdf",
      // last: "asdf",
      // email: "fdassdf@asdf.com",
      first: "",
      last: "",
      email: "",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (vals, results) => submit(dispatch, vals, results),
    skipSubscribe: () => closeEmailCollectionModal(),
    dismiss: () => dispatch(dismissEmailCollectionForm()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "emailCollection",
    validate,
    // validate,
  })(EmailCollectionModal)
);

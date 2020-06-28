import Modal from "./ui-component";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { emailCollectionFormSubmit } from "../../../actions/email-collection-form";
import validate from "./validate";

const submit = (dispatch, vals, results) => {
  dispatch(emailCollectionFormSubmit(vals, results));
};

const mapStateToProps = (state) => {
  return {
    opts: state.modal.showId ? state.modal[state.modal.showId] : {},
    show: state.modal.show,
    results: state.mealPlanner.results,
    initialValues: {
      first: "asdf",
      last: "asdf",
      email: "fdassdf@asdf.com",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (vals, results) => submit(dispatch, vals, results),
    skipSubscribe: () => {
      window.$("#email-collection").modal("toggle");
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
    // validate,
  })(Modal)
);

import React from "react";
import PropTypes from "prop-types";
import ReduxField from "../../molecules/ReduxField";
import INPUTS from "./inputs";
import modifyAndOpenPDF from "../../../utils/modifyAndOpenPDF";
import String from "../../atoms/String";

class EmailCollectionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INPUTS.reduce((accum, input) => {
        return {
          ...accum,
          [input.inputProps.name]: ReduxField.renderFields([input])[0],
        };
      }, {}),
    };
  }

  componentDidMount = () => {
    if (this.props.didDismiss) {
      modifyAndOpenPDF(this.props.results, this.props.mealPlannerInput);
    }
  };

  submit = (vals) => {
    this.props.onSubmit(vals, this.props.mealPlannerInput, this.props.results);
  };

  formBody = () => {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div className="modal-body">
          <div className="row">
            <div className="col-12">{this.state.first}</div>
          </div>
          <div className="row">
            <div className="col-12">{this.state.last}</div>
          </div>
          <div className="row">
            <div className="col-12">{this.state.email}</div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={this.props.skipSubscribe} type="button">
            <String textKey="emailCollectionForm.cancelButtonText" />
          </button>
          <button type="submit">
            <String textKey="emailCollectionForm.submitButtonText" />
          </button>
        </div>
      </form>
    );
  };

  thankyouBody = () => {
    return (
      <>
        <div className="modal-body">
          <String textKey="emailThankyouModal.body" />
          <p className="mt-4">
            <small>
              <String
                className="small"
                textKey="emailThankyouModal.disclaimer"
              />
            </small>
          </p>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={this.props.dismiss}
            type="button"
          >
            <String textKey="emailThankyouModal.closeButton" />
          </button>
        </div>
      </>
    );
  };

  loadingBody = () => {
    return (
      <div className="flex center h-100">
        <div className="spinner-border red" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.didDismiss) {
      return null;
    }
    let id = "email-collection";
    const { loading, didSubscribe } = this.props;
    console.log("loading", loading);
    const titleKey = !didSubscribe
      ? "emailCollectionForm.title"
      : "emailThankyouModal.title";

    return (
      <div
        className="modal fade"
        id={id}
        data-backdrop="false"
        data-keyboard="false"
        tabIndex="-1"
        role="dialog"
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        {loading && this.loadingBody()}
        {!loading && (
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              {!loading && (
                <div className="modal-header">
                  <h5 className="modal-title" id={`${id}Label`}>
                    <String textKey={titleKey} />
                  </h5>
                </div>
              )}
              {!didSubscribe ? this.formBody() : this.thankyouBody()}
            </div>
          </div>
        )}
      </div>
    );
  }
}

EmailCollectionModal.defaultProps = {};

EmailCollectionModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  opts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    uiOpts: PropTypes.shape({
      header: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
      body: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    }),
  }),
  mealPlannerInput: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
  skipSubscribe: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  didSubscribe: PropTypes.bool.isRequired,
  didDismiss: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired,
};

export default EmailCollectionModal;

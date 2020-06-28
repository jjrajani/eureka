import React from "react";
import PropTypes from "prop-types";
import ReduxField from "../../molecules/ReduxField";
import INPUTS from "./inputs";
import modifyAndOpenPDF from "../../../utils/modifyAndOpenPDF";

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
      modifyAndOpenPDF(this.props.results);
    }
  };

  submit = (vals) => {
    this.props.onSubmit(vals, this.props.results);
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
          <button
            className="btn btn-secondary"
            onClick={this.props.skipSubscribe}
            type="button"
          >
            No Thanks
          </button>
          <button className="btn btn-primary" type="submit">
            Get My Meal Planner
          </button>
        </div>
      </form>
    );
  };

  thankyouBody = () => {
    return (
      <>
        <div className="modal-body">
          Bacon ipsum dolor amet kielbasa sirloin ball tip, prosciutto bresaola
          turducken porchetta drumstick strip steak shankle tenderloin. Strip
          steak pork porchetta ribeye ground round cupim. Meatloaf spare ribs
          tail pastrami, cow burgdoggen tri-tip andouille ball tip boudin jowl
          kielbasa beef ribs landjaeger frankfurter. Cow chuck pork chop
          andouille t-bone chislic tail cupim biltong tongue kevin. Corned beef
          chicken boudin, ham short loin shoulder beef ribs ham hock. Swine pork
          loin short ribs, strip steak t-bone porchetta pork chop tenderloin
          venison cow.
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            onClick={this.props.dismiss}
            type="button"
          >
            Close
          </button>
        </div>
      </>
    );
  };

  loadingBody = () => {
    return <div className="modal-body">Loading...</div>;
  };

  render() {
    if (this.props.didDismiss) {
      return null;
    }
    let id = "email-collection";
    const { loading, didSubscribe } = this.props;
    console.log("loading", loading);
    console.log("didSubscribe", didSubscribe);
    const title = !didSubscribe
      ? "Lorem. Provide your email address get your personalized Meal Planner! Lorem."
      : "Lorem. Thank you for subscribing! Lorem.";
    return (
      <div
        className="modal fade"
        id={id}
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        role="dialog"
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {!loading && (
              <div className="modal-header">
                <h5 className="modal-title" id={`${id}Label`}>
                  {title}
                </h5>
              </div>
            )}
            {!loading &&
              (!didSubscribe ? this.formBody() : this.thankyouBody())}
            {loading && this.loadingBody()}
          </div>
        </div>
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
  results: PropTypes.object.isRequired,
  skipSubscribe: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  didSubscribe: PropTypes.bool.isRequired,
  didDismiss: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired,
};

export default EmailCollectionModal;

import React from "react";
import PropTypes from "prop-types";
import ReduxField from "../../molecules/ReduxField";
import INPUTS from "./inputs";

class Modal extends React.Component {
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

  submit = (vals) => {
    this.props.onSubmit(vals, this.props.results);
  };

  render() {
    let id = "email-collection";

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
            <div className="modal-header">
              <h5 className="modal-title" id={`${id}Label`}>
                Lorem. Provide your email address get your personalized Meal
                Planner! Lorem.
              </h5>
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {};

Modal.propTypes = {
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
};

export default Modal;

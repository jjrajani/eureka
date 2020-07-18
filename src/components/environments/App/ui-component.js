import React from "react";
import PropTypes from "prop-types";
import MealPlannerForm from "../../organisms/MealPlannerForm";
import ModalBackdrop from "../../atoms/ModalBackdrop";

class App extends React.Component {
  componentDidMount = () => {
    this.props.fetchAppData();
  };

  render() {
    return (
      <div className="react-meal-planner">
        <ModalBackdrop />
        <MealPlannerForm />
      </div>
    );
  }
}

App.defaulProps = {};

App.propTypes = {
  // loading: PropTypes.bool.isRequired,
  fetchAppData: PropTypes.func.isRequired,
};

export default App;

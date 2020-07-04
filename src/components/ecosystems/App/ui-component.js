import React from "react";
import PropTypes from "prop-types";
import MealPlannerForm from "../../organisms/MealPlannerForm";

class App extends React.Component {
  componentDidMount = async () => {
    await this.props.fetchAppData();
  };

  loadingBody = () => (
    <div className="flex center h-100">
      <div className="spinner-border red" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
  render() {
    return this.props.loading ? (
      this.loadingBody()
    ) : (
      <div className="react-meal-planner">
        <MealPlannerForm />
      </div>
    );
  }
}

App.defaulProps = {};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchAppData: PropTypes.func.isRequired,
};

export default App;

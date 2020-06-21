import React from "react";
import MealPlannerForm from "../../organisms/MealPlannerForm";
import "./App.css";
import {
  HashRouter as Router,
  Route,
  /*Redirect,*/ Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={MealPlannerForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

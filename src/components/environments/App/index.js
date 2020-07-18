import App from "./ui-component";
import { connect } from "react-redux";
import { fetchAppData } from "../../../actions/app-data";

const mapStateToProps = (state) => ({
  loading: state.appData.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAppData: () => dispatch(fetchAppData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

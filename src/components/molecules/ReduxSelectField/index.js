import ReduxSelectField from "./ui-component";
import { connect } from "react-redux";
import { getVal } from "../../../utils/object";

const mapStateToProps = (state) => ({
  getOptions: (textKey) => getVal(state.appData.data, textKey),
});

export default connect(mapStateToProps)(ReduxSelectField);

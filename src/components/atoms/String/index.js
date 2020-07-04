import String from "./ui-component";
import { connect } from "react-redux";
import { getVal } from "../../../utils/object";

const getText = (textKey, strings) => {
  return getVal(strings, textKey);
};

const mapStateToProps = (state) => ({
  getText: (textKey) => getText(textKey, state.appData.data),
});

export default connect(mapStateToProps)(String);

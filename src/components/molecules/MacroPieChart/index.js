import MacroPieChart from "./ui-component";
import { connect } from "react-redux";
import withSizes from "react-sizes";
import { isLV } from "../../../utils/window/sizes";

const mapStateToProps = (state) => ({
  macro: state.mealPlanner.results.macro || {
    protein: 0,
    fats: 0,
    carbs: 0,
  },
});

const mapSizesToProps = (sizes) => ({
  isLV: isLV(sizes),
});

export default connect(mapStateToProps)(
  withSizes(mapSizesToProps)(MacroPieChart)
);

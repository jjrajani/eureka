import PropTypes from "prop-types";

const String = ({ getText, textKey }) => {
  return getText(textKey);
};

String.defaultProps = {};
String.propTypes = {
  getText: PropTypes.func.isRequired,
  textKey: PropTypes.string.isRequired,
};

export default String;

import React from "react";
import PropTypes from "prop-types";

const ModalBackdrop = ({ show }) => {
  const classProps = show ? "modal-backdrop fade show" : "modal-backdrop fade";

  return <div className={classProps}></div>;
};

ModalBackdrop.defaultProps = {};
ModalBackdrop.propTypes = {
  show: PropTypes.bool,
};

export default ModalBackdrop;

import ModalBackdrop from "./ui-component";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  show: state.modal.showBackdrop,
});

export default connect(mapStateToProps)(ModalBackdrop);

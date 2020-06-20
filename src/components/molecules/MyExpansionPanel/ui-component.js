import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const MyExpansionPanel = ({ children, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {title && (
            <Typography className={classes.heading}>{title}</Typography>
          )}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>{children && children}</ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

MyExpansionPanel.defaultProps = {};

/**
 * MyExpansionPanelProps
 * @typedef {Object} MyExpansionPanelProps
 */
MyExpansionPanel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
};

export default MyExpansionPanel;

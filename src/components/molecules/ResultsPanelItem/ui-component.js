import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import CARBS from "./data/carbs";
import FATS from "./data/fats";
import PROTIEN from "./data/protien";
import WATER from "./data/water";

/**
 * ResultsPanelItem
 * @param {ResultsPanelItem} props
 */

const ResultsPanelItem = ({ type }) => {
  let data;
  if (type === "carbs") {
    data = CARBS;
  } else if (type === "fats") {
    data = FATS;
  } else if (type === "protien") {
    data = PROTIEN;
  } else if (type === "water") {
    data = WATER;
  } else {
    return null;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Paper className="">
          <p>
            {data.titleSection.hand.title}{" "}
            <span>{data.titleSection.hand.desc}</span>
          </p>
          <p>{data.titleSection.title}</p>
          <p>5</p>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper>
                    <ul>
                      {data.foods.map((f) => (
                        <li key={f}>
                          <p>{f}</p>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      {data.lookFor.map((f) => (
                        <li key={f} style={{ flex: "1 33%" }}>
                          <p>{f}</p>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper>
                    <ul>
                      {data.limit.map((f) => (
                        <li key={f}>
                          <p>{f}</p>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Paper>Image of food</Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

/**
 * ResultsPanelItem
 * @typedef {Object} ResultsPanelItemProps
 */
ResultsPanelItem.defaultProps = {};
ResultsPanelItem.propTypes = {
  type: PropTypes.string,
};

export default ResultsPanelItem;

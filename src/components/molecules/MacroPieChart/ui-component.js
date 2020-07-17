import React from "react";
import PropTypes from "prop-types";
import { PieChart } from "react-minimal-pie-chart";

class MacroPieCart extends React.Component {
  constructor(props) {
    super(props);
    let labels = this.props.data.reduce((accum, d) => {
      accum[d.title] = d.value;
      return accum;
    }, {});

    this.state = {
      labels,
    };
  }
  componentDidMount = () => {
    console.log("mount");
    let els = document.getElementsByTagName("text");

    for (let i = 0; i < 3; i++) {
      let title = els[i].innerHTML;
      let newLabel = els[i].cloneNode(true);
      newLabel.id = title;
      // els[i].id = title;
      newLabel.innerHTML = `${this.state.labels[title]}%`;
      els[i].y.baseVal[0].value =
        els[i].y.baseVal[0].value - (this.props.isLV ? 5 : 5);
      newLabel.y.baseVal[0].value =
        newLabel.y.baseVal[0].value + (this.props.isLV ? 6 : 5);

      els[i].parentNode.appendChild(newLabel);
    }
  };

  render() {
    const data = this.props.data;
    const lineWidth = 100;
    const radius = 50;

    return (
      <PieChart
        style={{
          fontFamily: '"ASAP", -apple-system, Helvetica, Arial, sans-serif',
          fontSize: "6px",
          maxWidth: "160px",
          maxHeight: "160px",
        }}
        data={data}
        radius={radius}
        lineWidth={lineWidth}
        label={(renderProps) => {
          return renderProps.dataEntry.title;
        }}
        labelPosition={100 - lineWidth / 2}
        labelStyle={{
          fill: "#fff",
          fontWeight: "600",
          fontSize: "10px",
          opacity: 0.85,
          pointerEvents: "none",
        }}
      />
    );
  }
}

MacroPieCart.propTypes = {
  data: PropTypes.object,
  isLV: PropTypes.bool.isRequired,
};

export default MacroPieCart;

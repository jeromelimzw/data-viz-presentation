import React from "react";
import Plot from "react-plotly.js";
import {
  categoriesAngleArray,
  getCategories,
  oneAngle
} from "./utils/extractData";

const Radar = ({
  radius,
  theta,
  names,
  isCategoryVisible,
  isCircleVisible,
  isDividerVisible,
  isLevelVisible,
  isMarkerVisible,
  data
}) => {
  return (
    <div className="fixed">
      <Plot
        className="radar"
        useResizeHandler={true}
        data={[
          ...categoriesAngleArray(data).map(a => ({
            r: [0, 6.2],
            theta: [0, a],
            type: "scatterpolar",
            line: { dash: "dash", color: "gray", width: 1 },
            hoverinfo: "text",
            visible: isDividerVisible
          })),

          {
            r: [1, 2.6, 4.0, 5.5],
            theta: [90, 90, 90, 90],
            text: ["familiar", "beginner", "intermediate", "advanced"],
            mode: "text",
            type: "scatterpolar",
            hoverinfo: "none",
            visible: isLevelVisible,
            textfont: { size: 15 },
            hoverlabel: {
              bgcolor: "black",
              bordercolor: "black",
              font: { family: "calibri", color: "white", size: 20 },
              align: "left",
              namelength: 30
            }
          },

          {
            r: radius,
            theta: theta,
            text: names,
            hoverinfo: "text",

            hoverlabel: {
              bgcolor: "black",
              bordercolor: "black",
              font: { family: "calibri", color: "white", size: 20 }
            },
            mode: "markers",

            marker: {
              symbol: "triangle-down",
              color: "rgb(138, 42, 226)",
              size: 13,
              opacity: 0.5
            },
            type: "scatterpolar",
            visible: isMarkerVisible
          }
        ]}
        layout={{
          dragmode: "",
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          showlegend: false,

          polar: {
            opacity: 1,
            layer: "above traces",

            radialaxis: {
              showline: false,
              ticks: "",
              angle: 0,
              tickangle: 0,
              visible: isCircleVisible,
              tickfont: {
                size: 17,
                color: "gray"
              },
              tickmode: "array",
              tickvals: [0, 1.9, 3.35, 4.8, 6.2],
              showticklabels: false,
              range: [0, 6.5]
            },

            angularaxis: {
              showgrid: false,
              tickmode: "array",
              showline: false,
              tickvals: getCategories(data).map(
                (a, index) => (index + 1) * oneAngle(data) - oneAngle(data) / 2
              ),
              ticks: "",
              ticktext: getCategories(data),
              tickfont: {
                size: 20,
                color: "gray"
              },
              visible: isCategoryVisible
            }
          }
        }}
      />
    </div>
  );
};

export default Radar;

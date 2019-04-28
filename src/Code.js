import React from "react";

const Code = ({
  isCategoryVisible,
  isCircleVisible,
  isDividerVisible,
  isLevelVisible,
  isMarkerVisible
}) => {
  return (
    <div className="tl f4">
      <pre>{`
      <Plot
      data={[`}</pre>

      <pre
        className={`${
          isDividerVisible ? "bg-light-green navy br3" : undefined
        } pa2`}
      >{`
      ...categoriesAngleArray().map(a => ({
      r: [0, 6.2],
      theta: [0, a],
      type: "scatterpolar",
      line: { dash: "dash", color: "gray", width: 1 },
      hoverinfo: "text",
      visible: isDividerVisible
      })),
      `}</pre>

      <pre
        className={`${
          isLevelVisible ? "bg-light-green navy br3" : undefined
        } pa2`}
      >{`    
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
      },`}</pre>

      <pre
        className={`${
          isMarkerVisible ? "bg-light-green navy br3" : undefined
        } pa2`}
      >{`              
      {
      r: radius,
      theta: theta,
      text: names,
      hoverinfo: "text",
      mode: "markers",
      hoverlabel: {
                  bgcolor: "black",
                  bordercolor: "black",
                  font: { family: "calibri", color: "white", size: 20 }
                  },    
      marker: {
              symbol: "triangle-down",
              color: "rgb(138, 42, 226)",
              size: 13,
              opacity: 0.5
              },
      type: "scatterpolar",
      visible: isMarkerVisible
      } `}</pre>
      <pre>{` 
      ]}
      layout={{
              dragmode: "pan",
              paper_bgcolor: "rgba(0,0,0,0)",
              plot_bgcolor: "rgba(0,0,0,0)",     
              width: 800,
              height: 800,
              showlegend: false,                 
              polar: {
                     sector: this.props.sector,
                     opacity: 1,
                     layer: "above traces",
        `}</pre>

      <pre
        className={`${
          isCircleVisible ? "bg-light-green navy br3" : undefined
        } pa2`}
      >{`             radialaxis: {
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
                          },`}</pre>

      <pre
        className={`${
          isCategoryVisible ? "bg-light-green navy br3" : undefined
        } pa2`}
      >{`              angularaxis: {
                           showgrid: false,
                           tickmode: "array",
                           showline: false,
                           tickvals: getCategories().map(
                           (a, index) => 
                           (index + 1) * oneAngle() - oneAngle() / 2),
                           ticks: "",
                           ticktext: getCategories(),
                           tickfont: {
                                     size: 20,
                                     color: "gray"
                                     },
                           visible: isCategoryVisible
                           }`}</pre>

      <pre>{`}
            }}
    />`}</pre>
    </div>
  );
};

export default Code;

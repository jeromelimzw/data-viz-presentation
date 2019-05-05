import React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm//languages/prism/jsx";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const Code = ({
  isCategoryVisible,
  isCircleVisible,
  isDividerVisible,
  isLevelVisible,
  isMarkerVisible
}) => {
  return (
    <React.Fragment>
      <h1>Code</h1>
      <div className="tl f3">
        <pre>
          <SyntaxHighlighter language="javascript" style={vs}>
            {`
      <Plot
      data={[`}
          </SyntaxHighlighter>
        </pre>

        <pre className="pa1">
          <SyntaxHighlighter
            language="javascript"
            style={isDividerVisible ? solarizedlight : vs}>{`
      ...categoriesAngleArray().map(a => ({
      r: [0, 6.2],
      theta: [0, a],
      type: "scatterpolar",
      line: { dash: "dash", color: "gray", width: 1 },
      hoverinfo: "text",
      visible: isDividerVisible
      })),
      `}</SyntaxHighlighter>
        </pre>

        <pre className="pa2">
          <SyntaxHighlighter
            language="javascript"
            style={isLevelVisible ? solarizedlight : vs}>{`    
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
      },`}</SyntaxHighlighter>
        </pre>

        <pre className="pa2">
          <SyntaxHighlighter
            language="javascript"
            style={isMarkerVisible ? solarizedlight : vs}>{`              
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
      } `}</SyntaxHighlighter>
        </pre>
        <pre>
          <SyntaxHighlighter language="javascript" style={vs}>{` 
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
        `}</SyntaxHighlighter>
        </pre>

        <pre className="pa2">
          <SyntaxHighlighter
            language="javascript"
            style={
              isCircleVisible ? solarizedlight : vs
            }>{`             radialaxis: {
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
                          },`}</SyntaxHighlighter>
        </pre>

        <pre className="pa2">
          <SyntaxHighlighter
            language="javascript"
            style={
              isCategoryVisible ? solarizedlight : vs
            }>{`              angularaxis: {
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
                           }`}</SyntaxHighlighter>
        </pre>

        <pre>
          <SyntaxHighlighter language="javascript" style={vs}>{`             }
        }}
    />`}</SyntaxHighlighter>
        </pre>
      </div>
    </React.Fragment>
  );
};

export default Code;

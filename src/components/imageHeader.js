import React from "react";

import "./../fonts/index.css";

/**
 * Text overlay for background images and videos
 * @param title {[string]} Array of length three
 * @param desc {[string]}
 * @return {JSX.Element}
 * @constructor
 */
const ImageHeader = ({ title, desc }) => {
  const isMobile = window.innerWidth < 700;

  const headingSize = isMobile ? 55 : 90;
  const bodySize = isMobile ? 15 : 22;

  const stylesheet = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "80vw",
      borderLeft: isMobile ? "10px solid white" : "15px solid white",
      marginTop: "10px",
      marginBottom: "10px",
    },
    heading: {
      marginLeft: "4vw",
      marginRight: "auto",
      color: "white",
      textDecoration: "none",
      font: `${headingSize}px PublicSans-Bold, serif`,
      zIndex: 10,
    },
    body: {
      paddingLeft: "4vw",
      color: "white",
      textDecoration: "none",
      flexGrow: "2",
      font: `${bodySize}px PublicSans-Regular, serif`,
      fontFamily: "PublicSans-Regular",
      alignSelf: isMobile ? "start" : "center",
      zIndex: 10,
      lineHeight: isMobile ? "19px" : "28px",
      letterSpacing: "0.6px",
      marginTop: isMobile ? "0.5rem" : 0,
    },
    row: {
      display: "flex",
      justifyContent: "row",
    },
  };

  return (
    <div style={stylesheet.container}>
      <span style={stylesheet.heading}>{title[0]}</span>
      <span style={stylesheet.heading}>{title[1]}</span>
      <div style={stylesheet.row}>
        <span style={stylesheet.heading}>{title[2]}</span>
        {!isMobile && (
          <div style={stylesheet.body}>
            {desc.map((line) => (
              <div>{line}</div>
            ))}
          </div>
        )}
      </div>
      {isMobile && (
        <div style={stylesheet.body}>
          {desc.map((line) => (
            <div>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageHeader;

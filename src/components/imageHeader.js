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

  const headingSize = isMobile ? 15 : 7;
  const bodySize = isMobile ? 4 : 1.4;

  const stylesheet = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: isMobile ? "80vw" : "70vw",
      borderLeft: isMobile ? "2vw solid white" : "0.8vw solid white",
      marginTop: "10px",
      marginBottom: "10px",
    },
    heading: {
      marginLeft: isMobile ? "4vw" : "3vw",
      marginRight: "auto",
      color: "white",
      textDecoration: "none",
      font: `${headingSize}vw PublicSans-Bold, serif`,
      zIndex: 10,
    },
    body: {
      paddingLeft: isMobile ? "4vw" : "3vw",
      color: "white",
      textDecoration: "none",
      flexGrow: "2",
      font: `${bodySize}vw PublicSans-Regular, serif`,
      fontFamily: "PublicSans-Regular",
      alignSelf: isMobile ? "start" : "center",
      zIndex: 10,
      lineHeight: isMobile ? "5vw" : "2.2vw",
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

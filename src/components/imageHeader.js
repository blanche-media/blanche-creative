import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";

import "./../fonts/index.css";

const ImageHeader = ({ text }) => {
  const ref = useRef();

  const isMobile = window.innerWidth < 700;

  const headingSize = isMobile ? 44 : 90;
  const bodySize = isMobile ? 7.5 : 22;

  const stylesheet = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "80vw",
      borderLeft: "15px solid white",
      marginTop: "10px",
      marginBottom: "10px",
    },
    heading: {
      marginLeft: isMobile ? "10vw" : "4vw",
      marginRight: "auto",
      color: "white",
      textDecoration: "none",
      font: `${headingSize}px PublicSans-Bold, serif`,
      zIndex: 10,
    },
    body: {
      paddingLeft: isMobile ? "10vw" : "4vw",
      color: "white",
      textDecoration: "none",
      flexGrow: "2",
      font: `${bodySize}px PublicSans-Regular, serif`,
      zIndex: 10,
      alignSelf: "center",
      lineHeight: "28px",
      letterSpacing: "0.6px",
    },
    row: {
      display: "flex",
      justifyContent: "row",
    },
  };

  return (
    <div style={stylesheet.container}>
      <span style={stylesheet.heading}>WE MAKE</span>
      <span style={stylesheet.heading}>LIFE</span>
      <div style={stylesheet.row}>
        <span style={stylesheet.heading}>EASY</span>
        <div style={stylesheet.body}>
          <div>Our goal is to empower creators to share their message</div>
          <div>through organic brand partnerships.</div>
          <div>
            Focus on what really matters, and let us take care of the rest
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHeader;

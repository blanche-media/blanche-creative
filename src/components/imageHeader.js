import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";

import "./../fonts/index.css";

const ImageHeader = ({ company }) => {
  const ref = useRef();

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
      lineHeight: isMobile ? "18px" : "28px",
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
      <span style={stylesheet.heading}>{company ? "WE GET" : "WE MAKE"}</span>
      <span style={stylesheet.heading}>LIFE</span>
      <div style={stylesheet.row}>
        <span style={stylesheet.heading}>EASY</span>
        {!isMobile && (
          <div style={stylesheet.body}>
            <div>Our goal is to empower creators to share their message</div>
            <div>through organic brand partnerships.</div>
            <div>
              Focus on what really matters, and let us take care of the rest
            </div>
          </div>
        )}
      </div>
      {isMobile && (
        <div style={stylesheet.body}>
          <div>Our goal is to empower creators to</div>
          <div>share their message through organic</div>
          <div>brand partnerships.</div>
          <div>Focus on what really matters, and let</div>
          <div>us take care of the rest</div>
        </div>
      )}
    </div>
  );
};

export default ImageHeader;

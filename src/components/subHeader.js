import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";

import "./../fonts/index.css";

const SubHeader = ({ text, small }) => {
  const ref = useRef();

  const isMobile = window.innerWidth < 700;

  const logoSize = isMobile ? 44 : 50;
  const bodySize = isMobile ? 8.5 : small ? 5.5 : 6.5;
  const copyrightSize = isMobile ? 18 : 21;

  const stylesheet = {
    container: {
      height: isMobile ? "85vh" : "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "100vw",
    },
    logo: {
      marginLeft: isMobile ? "10vw" : "15vw",
      marginRight: "auto",
      color: "white",
      textDecoration: "none",
      marginTop: "5vh",
      font: `${logoSize}px/${logoSize}px Limerick-Serial-Bold, serif`,
      zIndex: 10,
    },
    body: {
      paddingLeft: isMobile ? "10vw" : "15vw",
      color: "white",
      letterSpacing: "-1.1px",
      textDecoration: "none",
      flexGrow: "2",
      marginTop: "7vh",
      font: `${bodySize}vmax/${bodySize}vmax PublicSans-Bold, serif`,
      zIndex: 10,
    },
    copyright: {
      position: "absolute",
      color: "white",
      textDecoration: "none",
      letterSpacing: "-0.37px",
      font: `${copyrightSize}px/${copyrightSize}px BentonSans-Black, serif`,
      wordBreak: "keep-all",
      paddingLeft: isMobile ? "0" : "15vw",
      paddingRight: 0,
      alignSelf: isMobile ? "center" : "left",
      bottom: "5vh",
    },
  };

  useEffect(() => {
    new Typed(ref.current, {
      strings: [text.replace(/ /g, "<br>")],
      typeSpeed: 70,
      showCursor: false,
    });
  }, []);

  return (
    <div style={stylesheet.container}>
      <NavLink to="/" style={stylesheet.logo}>
        B.
      </NavLink>
      <h1 ref={ref} style={stylesheet.body} />
    </div>
  );
};

export default SubHeader;

import React, { useRef, useEffect } from "react"
import Typed from "typed.js"

import "./../fonts/index.css"

const Header = ({ text }) => {
  const ref = useRef();

  const isMobile = window.innerWidth < 700;

  const logoSize = isMobile ? 44 : 59;
  const bodySize = isMobile ? 56 : 110;
  const copyrightSize = isMobile ? 19 : 21;

  const stylesheet = {
    "container" : {
      height: isMobile ? "85vh" : "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "100vw",
    },
    "logo" : {
      marginLeft: isMobile ? "10vw" : "15vw",
      marginRight: "auto",
      color: "white",
      textDecoration: "none",
      marginTop: "5vh",
      font: `${logoSize}px/${logoSize}px Limerick-Serial-Bold, serif`,
    },
    "body" : {
      paddingLeft: isMobile ? "10vw" : "15vw",
      color: "white",
      letterSpacing: "-1.1px",
      textDecoration: "none",
      flexGrow: "2",
      marginTop: "7vh",
      font: `${bodySize}px/${bodySize}px PublicSans-Bold, serif`,
    },
    "copyright" : {
      color: "white",
      textDecoration: "none",
      letterSpacing: "-0.37px",
      marginBottom: "5vh",
      font: `${copyrightSize}px/${copyrightSize}px BentonSans-Black, serif`,
      wordBreak: "keep-all",
      paddingLeft: isMobile ? "0" : "15vw",
      alignSelf: isMobile ? "center" : "left"
    }
  }

  useEffect(() => {
    new Typed(ref.current, {
      strings: [text.replace(/ /g, '<br>')],
      typeSpeed: 70,
      showCursor: false
    });
  }, []);

  return (
    <div style={stylesheet.container}>
      <a href="/" style={stylesheet.logo}>B.</a>
      <h1 ref={ref} style={stylesheet.body} />
      <a href="/" style={stylesheet.copyright}>©BLANCHE MEDIA INC. 2020</a>
    </div>
  );
}

export default Header

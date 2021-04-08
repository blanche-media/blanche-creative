import React from "react";
import RoundButton from "./roundButton";

/**
 *
 * @param id {string} for scroll to element
 * @param copyA {string} pieces of copy
 * @param copyB {string}
 * @param buttonText {string}
 * @return {JSX.Element}
 * @constructor
 */
const TheFuture = ({ id, copyA, copyB, buttonText }) => {
  const isMobile = window.innerWidth < 700;
  const headingSize = isMobile ? 9.3 : 4;
  const bodySize = isMobile ? 3.5 : 1.6;
  const copyrightSize = isMobile ? 18 : 21;

  const styles = {
    container: {
      position: "relative",
      height: "100vh",
      width: "100vw",
      paddingTop: "10vh",
      overflow: "hidden",
      scrollSnapAlign: "center",
    },
    text: {
      marginLeft: isMobile ? "8vw" : "15vw",
      width: isMobile ? "60vw" : "35vw",
    },
    title: {
      color: "white",
      font: `${headingSize}vw Helvetica-Bold`,
      fontWeight: "bold",
      letterSpacing: "-0.12vw",
      marginBottom: "2rem",
    },
    body: {
      color: "white",
      font: `${bodySize}vw PublicSans-Bold`,
      lineHeight: 1.39,
    },
    copy: {
      color: "white",
      font: `${copyrightSize}px/${copyrightSize}px BentonSans-Black, serif`,
      letterSpacing: "-0.37px",
      position: "absolute",
      left: "15vw",
      bottom: "5vh",
    },
    button: {
      position: "absolute",
      right: "-3vw",
      bottom: "10vh",
    },
  };

  return (
    <div style={styles.container} id={id}>
      <div style={styles.text}>
        <div style={styles.title}>THE FUTURE</div>
        <p style={styles.body}>{copyA}</p>
        <p style={styles.body}>{copyB}</p>
      </div>
      <div style={styles.copy}>©BLANCHE MEDIA INC. 2021</div>
      <RoundButton
        style={styles.button}
        text={buttonText}
        size={22}
        dest={"join-us"}
      />
    </div>
  );
};

export default TheFuture;

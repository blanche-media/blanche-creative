import React from "react";
import RoundButton from "./roundButton";

/**
 *
 * @param id {string} for scroll to element
 * @param copyA {string} pieces of copy
 * @param copyB {string}
 * @return {JSX.Element}
 * @constructor
 */
const TheFuture = ({ id, copyA, copyB }) => {
  const isMobile = window.innerWidth < 700;
  const headingSize = isMobile ? 30 : 40;
  const bodySize = isMobile ? 16 : 18;

  const styles = {
    container: {
      position: "relative",
      height: "100vh",
      width: "100vw",
      paddingTop: "10vh",
      overflow: "hidden",
    },
    text: {
      marginLeft: "15vw",
      width: "30vw",
    },
    title: {
      color: "white",
      font: `${headingSize}px Helvetica`,
      fontWeight: "bold",
      letterSpacing: "-0.43px",
      marginBottom: "2rem",
    },
    body: {
      color: "white",
      font: `${bodySize}px PublicSans-Bold`,
      lineHeight: 1.39,
    },
    copy: {
      color: "white",
      font: `${bodySize}px PublicSans-Bold`,
      position: "absolute",
      left: "15vw",
      bottom: "5vh",
    },
    button: {
      position: "absolute",
      right: -15,
      top: "20vh",
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
        text={" JOIN US JOIN US JOIN US JOIN US "}
        size={25}
        dest={"join-us"}
      />
    </div>
  );
};

export default TheFuture;

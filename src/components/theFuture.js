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
  const copyrightSize = isMobile ? 18 : 21;
  const listTitleSize = isMobile ? 38 : 45;
  const listDescSize = isMobile ? 16 : 18;

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
      width: isMobile ? "60vw" : "35vw",
    },
    title: {
      color: "white",
      font: `${listTitleSize}px PublicSans-Bold, serif`,
      fontWeight: "bold",
      letterSpacing: "-0.12vw",
      marginBottom: "2rem",
    },
    body: {
      color: "white",
      font: `${listDescSize}px PublicSans-Bold, serif`,
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
      bottom: isMobile ? "13vh" : "10vh",
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

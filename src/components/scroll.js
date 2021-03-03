import React from "react";

const Scroll = ({ text, id, style }) => {
  const isMobile = window.innerWidth < 700;

  const styles = {
    container: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row",
      alignItems: "center",
      marginTop: isMobile ? "6vh" : "13vh",
      marginLeft: isMobile ? 0 : "15vw",
      paddingBottom: isMobile ? "3vh" : "11vh",
    },
    text: {
      color: "white",
      letterSpacing: "-1.1px",
      textDecoration: "none",
      fontSize: 14,
      marginBottom: isMobile ? "0.5rem" : 0,
      paddingLeft: isMobile ? 0 : 10,
      cursor: "pointer",
    },
    icon: {
      color: "white",
      fontSize: 14,
      cursor: "pointer",
    },
  };

  return (
    <div
      style={{ ...styles.container, ...style }}
      onClick={() => {
        document
          .getElementById(id)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      <i className="fas fa-arrow-down" style={styles.icon} />
      <h1 style={styles.text}>{text}</h1>
    </div>
  );
};

export default Scroll;

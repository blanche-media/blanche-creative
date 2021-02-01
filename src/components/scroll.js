import React from "react";

const Scroll = ({ text, id, style }) => {
  const isMobile = window.innerWidth < 700;
  const bodySize = isMobile ? 0.8 : 1;

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      marginTop: "9vh",
      marginLeft: isMobile ? "10vw" : "15vw",
      paddingBottom: "11vh",
    },
    text: {
      color: "white",
      letterSpacing: "-1.1px",
      textDecoration: "none",
      fontSize: 14,
      marginBottom: 0,
      paddingLeft: 10,
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
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <i className="fas fa-arrow-down" style={styles.icon} />
      <h1 style={styles.text}>{text}</h1>
    </div>
  );
};

export default Scroll;

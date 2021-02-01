import React from "react";
import Creator1 from "../images/creator1.jpg";
import Creator2 from "../images/creator2.jpeg";
import Creator3 from "../images/creator3.jpeg";

const Collage = ({ images }) => {
  const isMobile = window.innerWidth < 700;

  const styles = {
    imgContainer: {
      position: "absolute",
      width: "78vw",
      height: "70vh",
      right: 0,
      top: "16vh",
    },

    img: {
      position: "absolute",
      width: "48vh",
      height: "60vh",
      backgroundColor: "rgba(47,110,122,0.5)",
    },
  };

  return (
    <div style={styles.imgContainer}>
      <img
        src={Creator1}
        style={{ ...styles.img, left: 0, top: "10vh", zIndex: 1 }}
      />
      <img
        src={Creator2}
        style={{ ...styles.img, left: "40vh", top: 0, zIndex: 2 }}
      />
      <img
        src={Creator3}
        style={{ ...styles.img, left: "80vh", top: "15vh", zIndex: 1 }}
      />
    </div>
  );
};

export default Collage;

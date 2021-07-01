import React from "react";

const styles = {
  scroll: {
    display: "flex",
    overflowX: "scroll",
    overflowY: "visible",
    marginLeft: "-15vw",
    paddingRight: "30px",
    webkitOverflowScrolling: "touch",
  },
  card: {
    minWidth: "175px",
    maxWidth: "175px",
    height: "220px",
    margin: "20px",
  },
  buffer: {
    minWidth: "15vw",
    height: "100%",
    marginLeft: "-20px",
  },
  end: {
    minWidth: "30px",
    height: "100%",
    margin: "20px",
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
};

const ImageScroll = ({ images }) => {
  return (
    <div style={styles.scroll}>
      <div style={styles.buffer} />
      {images.map((image, index) => (
        <div key={index} style={styles.card}>
          <img src={image} style={styles.img} />
        </div>
      ))}
      <div style={styles.end}>.</div>
    </div>
  );
};

export default ImageScroll;

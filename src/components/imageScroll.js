import React from "react";

const styles = {
  scroll: {
    display: "flex",
    overflowX: "scroll",
    marginLeft: "-15vw",
    paddingRight: "30px",
  },
  card: {
    backgroundColor: "blue",
    minWidth: "170px",
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
};

const ImageScroll = ({ images }) => {
  return (
    <div style={styles.scroll}>
      <div style={styles.buffer} />
      {images.map((image, index) => (
        <div key={index} style={styles.card} />
      ))}
      <div style={styles.end}>.</div>
    </div>
  );
};

export default ImageScroll;

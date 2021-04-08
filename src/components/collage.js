import React from "react";

import { useSpring, animated, config } from "react-spring";

/**
 *
 * @param image1 a local image file
 * @param image2
 * @param image3
 * @return {JSX.Element}
 * @constructor
 */
const Collage = ({ image1, image2, image3 }) => {
  const isMobile = window.innerWidth < 700;

  const image1AnimEntry = useSpring({
    config: { mass: 7, tension: 280, friction: 95 },
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(250px)", position: "absolute" },
    delay: 1700,
  });

  const image2AnimEntry = useSpring({
    config: config.slow,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(250px)", position: "absolute" },
    delay: 1400,
  });

  const image3AnimEntry = useSpring({
    config: { mass: 7, tension: 280, friction: 95 },
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(250px)", position: "absolute" },
    delay: 2100,
  });

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
      width: isMobile ? "24vh" : "48vh",
      height: isMobile ? "30vh" : "60vh",
      objectFit: "cover",
    },
  };

  return (
    <div style={styles.imgContainer}>
      <animated.img
        src={image1}
        style={{
          ...styles.img,
          left: 0,
          top: "10vh",
          zIndex: isMobile ? 2 : 1,
          ...image1AnimEntry,
        }}
      />
      <animated.img
        src={image2}
        style={{
          ...styles.img,
          left: isMobile ? "20vh" : "40vh",
          top: 0,
          zIndex: isMobile ? 1 : 2,
          ...image2AnimEntry,
        }}
      />
      <animated.img
        src={image3}
        style={{
          ...styles.img,
          left: isMobile ? "18vh" : "80vh",
          top: isMobile ? "26vh" : "15vh",
          zIndex: isMobile ? 3 : 1,
          ...image3AnimEntry,
        }}
      />
    </div>
  );
};

export default Collage;

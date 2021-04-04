import React from "react";
import Creator1 from "../images/creator1.jpg";
import Creator2 from "../images/creator2.jpeg";
import Creator3 from "../images/creator3.jpeg";
import Company1 from "../images/company1.jpg";
import Company2 from "../images/company2.jpeg";
import Company3 from "../images/company3.png";

import { useSpring, animated, config } from "react-spring";

const Collage = ({ creator }) => {
  const isMobile = window.innerWidth < 700;

  const image1AnimEntry = useSpring({
    config: { mass: 7, tension: 280, friction: 95 },
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(250px)" },
    delay: 1100,
  });

  const image2AnimEntry = useSpring({
    config: config.slow,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(250px)" },
    delay: 1000,
  });

  const image3AnimEntry = useSpring({
    config: { mass: 7, tension: 280, friction: 95 },
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(250px)" },
    delay: 1200,
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
        src={creator ? Creator1 : Company1}
        style={{
          ...styles.img,
          left: 0,
          top: "10vh",
          zIndex: isMobile ? 2 : 1,
          ...image1AnimEntry,
        }}
      />
      <animated.img
        src={creator ? Creator2 : Company2}
        style={{
          ...styles.img,
          left: isMobile ? "20vh" : "40vh",
          top: 0,
          zIndex: isMobile ? 1 : 2,
          ...image2AnimEntry,
        }}
      />
      <animated.img
        src={creator ? Creator3 : Company3}
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

import React, { useState } from "react";
import "./../fonts/index.css";
import { useSpring, animated } from "react-spring";

/**
 * Text overlay for background images and videos
 * @param titleA, titleB, titleC {[string]} Arrays of length three
 * @param descA, descB, descC {[string] | string} if on mobile then just a string, if on desktop then array for more controlled lines
 * @return {JSX.Element}
 * @constructor
 */
const ImageHeader = ({ titleA, titleB, titleC, descA, descB, descC }) => {
  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const isMobile = window.innerWidth < 700;

  const headingSize = isMobile ? 15 : 7;
  const bodySize = isMobile ? 4 : 1.4;

  let title, desc;
  switch (index) {
    case 0:
      title = titleA;
      desc = descA;
      break;
    case 1:
      title = titleB;
      desc = descB;
      break;
    case 2:
      title = titleC;
      desc = descC;
      break;
    default:
      title = titleA;
      desc = descA;
  }

  const slideAnim = useSpring({
    config: { mass: 10, tension: 70, friction: 50 },
    transform: "translateX(-80vw)",
    from: { transform: "translateX(0vw)" },
    delay: reverse ? 0 : 6000,
    reverse: reverse,
    onRest: () => {
      if (!reverse) setIndex((index + 1) % 3);
      setReverse(!reverse);
    },
  });

  const stylesheet = {
    border: {
      overflow: "hidden",
      borderLeft: isMobile ? "2vw solid white" : "0.8vw solid white",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: isMobile ? "80vw" : "70vw",
      marginTop: "10px",
      marginBottom: "10px",
    },
    heading: {
      marginLeft: isMobile ? "4vw" : "3vw",
      marginRight: "auto",
      color: "white",
      textDecoration: "none",
      font: `${headingSize}vw PublicSans-Bold, serif`,
      zIndex: 10,
    },
    body: {
      paddingLeft: isMobile ? "4vw" : "3vw",
      color: "white",
      textDecoration: "none",
      flexGrow: "2",
      font: `${bodySize}vw PublicSans-Regular, serif`,
      fontFamily: "PublicSans-Regular",
      alignSelf: isMobile ? "start" : "center",
      zIndex: 10,
      lineHeight: isMobile ? "5vw" : "2.2vw",
      letterSpacing: "0.6px",
      marginTop: isMobile ? "0.5rem" : 0,
    },
    row: {
      display: "flex",
      justifyContent: "row",
    },
  };

  return (
    <div style={stylesheet.border}>
      <animated.div style={{ ...stylesheet.container, ...slideAnim }}>
        <span style={stylesheet.heading}>{title[0]}</span>
        <span style={stylesheet.heading}>{title[1]}</span>
        <div style={stylesheet.row}>
          <span style={stylesheet.heading}>{title[2]}</span>
          {!isMobile && (
            <div style={stylesheet.body}>
              {desc.map((line) => (
                <div>{line}</div>
              ))}
            </div>
          )}
        </div>
        {isMobile && (
          <div style={{ ...stylesheet.body, minHeight: "27vw" }}>{desc}</div>
        )}
      </animated.div>
    </div>
  );
};

export default ImageHeader;

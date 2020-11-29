import React, { useEffect, useRef, useState } from "react"
import CircleType from 'circletype'
import { motion } from "framer-motion"

import "./../fonts/index.css"

const RoundButton = ({ text, dest, style, onClick, size, type }) => {
  const buttonRef = useRef();
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState(false);
  const hoverColor = "#e84f38";

  const spin = {
    animation: {
      rotate: 360
    },
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 15
    }
  }

  const styles = {
    container : {
      ...style,
      width: size,
      height: size,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      backgroundColor: "transparent",
      border: "none"
    },
    circle : {
      height: `${size/5}px`,
      width: `${size/5}px`,
      borderRadius: "50%",
      backgroundColor: hover ? hoverColor : "white",
      position: "absolute",
    },
    buttonText : {
      color: loading ? "transparent" : hover ? hoverColor : "white",
      font: `${size*0.13}px/${size*0.13}px PublicSans-SemiBold, serif`,
      letterSpacing: `${size*0.015}px`,
    },
  }

  useEffect(() => {
    new CircleType(buttonRef.current);
    setLoading(false);
  }, []);

  return (
    dest ? (
      <a
        style={styles.container}
        href={"/" + dest}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <div style={styles.circle}/>
        <motion.div
          ref={buttonRef}
          style={styles.buttonText}
          animate={spin.animation}
          transition={spin.transition}
          >{text}</motion.div>
      </a>
    ) : (
      <button
        style={styles.container}
        type={type}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <div style={styles.circle}/>
        <motion.div
          ref={buttonRef}
          style={styles.buttonText}
          animate={spin.animation}
          transition={spin.transition}
          >{text}</motion.div>
      </button>
    )
  );
}

RoundButton.defaultProps = {
  size: 310
}

export default RoundButton

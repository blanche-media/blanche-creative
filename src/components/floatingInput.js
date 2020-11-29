import React, { useState } from "react"
import { bool } from "prop-types"
import TextareaAutosize from 'react-textarea-autosize';

import "./../fonts/index.css"

const FloatingInput = (props) => {
  const [focused, setFocused] = useState(false);
  const isFilled = props.value.length !== 0;

  const isMobile = window.innerWidth < 700;

  const height = isMobile ? 3 : 2;
  const smallHeight = isMobile ? 1 : 0.6;

  const styles = {
    container : {
      position: "relative",
      padding: `0 0 0 0`,
      marginBottom: `${smallHeight}vmax`,
    },
    label : {
      position: "absolute",
      top: `${isFilled ? smallHeight : height / 1.5}vmax`,
      font: `${height}vmax BentonSans-Black, serif`,
      color: isFilled ? "#ffcc66" : focused ? "white" : "grey",
      fontSize: `${isFilled ? smallHeight : height}vmax`,
      transition: "300ms",
      height: "300px"
    },
    input : {
      width: `${isMobile ? 85 : 60}%`,
      paddingTop: `${height / 1.5}vmax`,
      paddingLeft: `${0}vmax`,
      font: `${height}vmax BentonSans-Black, serif`,
      transition: "300ms",
      color: "white",
      outline: 0,
      background: "transparent",
      border: "none",
      overflow: "hidden",
    }
  }

  return (
    <div style={styles.container}>
      <label for={props.label}>
        <span style={styles.label}>{ props.label.toUpperCase() }</span>
      </label>
      {props.multiline ? 
      (<TextareaAutosize
        {...props}
        rows={1}
        value={props.value}
        id={props.label}
        name={props.name ? props.name : props.label}
        style={styles.input}
        type="text"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />) : 
      (<input
        {...props}
        rows={1}
        value={props.value}
        id={props.label}
        name={props.name ? props.name : props.label}
        style={styles.input}
        type="text"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />)}
    </div>
  );
}

FloatingInput.propTypes = {
  multiline: bool
}

FloatingInput.defaultProps = {
  multiline: false
}

export default FloatingInput
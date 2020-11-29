import React, { useState } from "react"
import { bool } from "prop-types"
import TextareaAutosize from 'react-textarea-autosize';

import "./../fonts/index.css"

const FloatingInput = (props) => {
  const [focused, setFocused] = useState(false);
  const height = "36px";
  const smallHeight = "14px";
  const isFilled = props.value.length !== 0;

  const styles = {
    container : {
      position: "relative",
      overflow: "hidden",
      padding: `0 0 0 0`,
      marginBottom: "10px",
    },
    label : {
      position: "absolute",
      left: isFilled ? "4px" : "0px",
      top: isFilled ? "5px" : "25px",
      font: `${height} BentonSans-Black, serif`,
      color: isFilled ? "#ffcc66" : focused ? "white" : "grey",
      fontSize: isFilled ? smallHeight : height,
      transition: "300ms",
    },
    input : {
      width: "100%",
      paddingTop: "25px",
      font: `${height} BentonSans-Black, serif`,
      transition: "300ms",
      color: "white",
      outline: 0,
      background: "transparent",
      border: "none",
      overflowWrap: "break-word",
      resize: "none",
    }
  }

  return (
    <div style={styles.container}>
      <label for={props.label}>
        <span style={styles.label}>{ props.label.toUpperCase() }</span>
      </label>
      <TextareaAutosize
        {...props}
        rows={3}
        value={props.value}
        id={props.label}
        name={props.name ? props.name : props.label}
        style={styles.input}
        type="text"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
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
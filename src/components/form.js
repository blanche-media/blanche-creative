import React from "react"

import RoundButton from "./../components/roundButton"
import "./../fonts/index.css"

const Form = ({ style, id, children }) => {
  const formStyle = {
    ...style,
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "60%",
  }

  return (
    <form style={formStyle}
      id={id}
      name={id}
      method="POST"
      data-netlify="true">
      <input type="hidden" name="form-name" value={id} />
      {children}
      <RoundButton
        text={"SEND SEND SEND SEND SEND"}
        size={4}
        type="submit"
        style={{ marginTop: "20px" }}
      />
    </form>
  );
}

export default Form

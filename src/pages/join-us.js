import React, { useState } from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import FloatingInput from "../components/floatingInput"
import Form from "../components/form"
import SEO from "../components/seo"

const JoinUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [socials, setSocials] = useState("");
  const [comments, setComments] = useState("");

  const styles = {
    form: {
      position: "fixed",
      right: 0,
      top: 0,
      marginTop: "17vh",
    }
  }

  const formName = "joinUs";

  return (
    <Layout>
      <SEO title="Join Us" />
      <Header text = {"JOI N US"} />
      <Form style={styles.form} id={formName}>
        <FloatingInput
          required
          label="name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoFocus={true} />
        <FloatingInput
          label="email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <FloatingInput
          label="website"
          value={website}
          onChange={e => setWebsite(e.target.value)} />
        <FloatingInput
          label="socials"
          value={socials}
          onChange={e => setSocials(e.target.value)} />
        <FloatingInput
          multiline
          label="what cool stuff are you working on?"
          name="comments"
          value={comments}
          onChange={e => setComments(e.target.value)} />
      </Form>
    </Layout>
  )
}

export default JoinUs
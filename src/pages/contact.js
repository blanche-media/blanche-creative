import React, { useState } from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import FloatingInput from "../components/floatingInput"
import Form from "./../components/form"
import SEO from "../components/seo"
import { m } from "framer-motion"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const [comments, setComments] = useState("");

  const styles = {
    form: {
      position: "fixed",
      right: 0,
      top: 0,
      marginTop: "17vh",
    }
  }

  const formName = "contact";

  return (
    <Layout>
      <SEO title="Contact" />
      <Header text="CO NT AC T US"/>
      <Form style={styles.form}
        id={formName}>
        <FloatingInput
          required
          label="name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoFocus={true} />
        <FloatingInput
          required
          label="email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <FloatingInput
          required
          label="website"
          value={website}
          onChange={e => setWebsite(e.target.value)} />
        <FloatingInput
          required
          label="company"
          value={company}
          onChange={e => setCompany(e.target.value)} />
        <FloatingInput
          multiline
          label="comments"
          value={comments}
          onChange={e => setComments(e.target.value)} />
      </Form>
    </Layout>
  );
}

export default Contact
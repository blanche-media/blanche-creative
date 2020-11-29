import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import RoundButton from "../components/roundButton"
import SEO from "../components/seo"

const styles = {
  company : {
    alignSelf: "flex-end",
    marginLeft: "50px",
  },
  container : {
    marginBottom: "-50px",
    marginRight: "-50px",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    overflow: "hidden",
  }
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header text="GET THE RIGHT ATTEN TION." />
      <div style={styles.container}>
        <RoundButton 
          text="I’M A CREATOR I’M A CREATOR"
          dest="join-us"
        />
        <RoundButton 
          text="I’M A COMPANY I’M A COMPANY"
          dest="contact"
          style={styles.company}
        />
      </div>
    </Layout>
  );
}

export default IndexPage
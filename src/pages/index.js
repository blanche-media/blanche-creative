import React from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import RoundButton from "../components/roundButton";
import SEO from "../components/seo";

const IndexPage = () => {
  const isMobile = window.innerWidth < 700;

  const styles = {
    creator: {
      position: "fixed",
      right: "-2vmax",
      top: "-2vw",
    },
    company: {
      position: "fixed",
      right: "-2vw",
      bottom: isMobile ? "15vh" : "-1vw",
    },
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Header text="GET THE RIGHT ATTEN TION." />
      <RoundButton
        text="I’M A CREATOR I’M A CREATOR"
        dest="creator"
        style={styles.creator}
      />
      <RoundButton
        text="I’M A COMPANY I’M A COMPANY"
        dest="company"
        style={styles.company}
      />
    </Layout>
  );
};

export default IndexPage;

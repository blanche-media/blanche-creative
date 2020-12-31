import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Iframe from 'react-iframe'

const JoinBlanche = () => {
  const height = window.innerHeight;

  const styles = {
    container: {
      width: '100vw',
      height: height + 50,
      backgroundColor: '#303030',
      marginBottom: 0,
      marginTop: '-50px',
      overscrollBehavior: 'contain',
      overflow: 'hidden',
    },
    outer: {
      position: 'absolute',
      top: -50,
      height: 50,
      width: '100vw',
      backgroundColor: '#0D0D0D'
    }
  }

  return (
    <Layout>
    <SEO title="Join Blanche" />
    <div style={styles.container}>
      <div style={styles.outer}></div>
      <Iframe
        url="https://pznnm6qdtz.editorx.io/joinblanche"
        width="100%"
        height="100%"
        frameBorder="0"/>
    </div>
    </Layout>
  );
}

export default JoinBlanche
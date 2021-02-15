import React from "react";

import Layout from "../components/layout";
import Collage from "../components/collage";
import SubHeader from "../components/subHeader";
import RoundButton from "../components/roundButton";
import SEO from "../components/seo";
import Scroll from "../components/scroll";
import ImageHeader from "../components/imageHeader";
import TheFuture from "../components/theFuture";

const Creator = () => {
  const isMobile = window.innerWidth < 700;

  const listTitleSize = isMobile ? 44 : 50;
  const listDescSize = isMobile ? 44 : 20;

  const styles = {
    contact: {
      position: "absolute",
      overflow: "hidden",
      right: isMobile ? "-10vw" : "-5vw",
      top: "-4vw",
    },
    pageOne: {
      position: "relative",
      overflow: "hidden",
      width: "100vw",
    },
    bgImage: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,100,200,0.4)",
    },
    imageText: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "90vh",
    },
    scrollTwo: {
      paddingBottom: 0,
      marginTop: 0,
    },
    sectionThree: {
      marginLeft: "15vw",
      marginTop: "30vh",
    },
    listTitle: {
      color: "white",
      textDecoration: "none",
      font: `${listTitleSize}px PublicSans-Bold, serif`,
    },
    listDesc: {
      color: "white",
      textDecoration: "none",
      font: `${listDescSize}px PublicSans-Regular, serif`,
      letterSpacing: "0.6px",
      width: "45vw",
      lineHeight: 1.55,
    },
  };

  return (
    <Layout>
      <div style={styles.pageOne}>
        <SEO title="Creator" />
        <SubHeader text="I'M A CRE ATO R" />
        <RoundButton
          text="CONTACT CONTACT"
          dest="contact"
          style={styles.contact}
        />
        <Collage creator={true} />
        <Scroll text={"SEE WHAT WE CAN DO TOGETHER"} id={"two"} />
      </div>
      <div style={styles.bgImage} id={"two"}>
        <div style={styles.imageText}>
          <ImageHeader />
        </div>
        {!isMobile && (
          <Scroll
            text={"KEEP SCROLLING"}
            id={"three"}
            style={styles.scrollTwo}
          />
        )}
      </div>
      {/*<div style={styles.sectionThree} id={"three"}>*/}
      {/*  <div>*/}
      {/*    <h3 style={styles.listTitle}>THE FAMILY</h3>*/}
      {/*    <div style={styles.listDesc}>*/}
      {/*      Our goal is to empower creators to share their message through*/}
      {/*      organic brand partnerships. Focus on what really matters, and let us*/}
      {/*      take care of the rest.*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <TheFuture id={"three"} />
    </Layout>
  );
};

export default Creator;

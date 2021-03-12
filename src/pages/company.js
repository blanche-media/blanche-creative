import React from "react";

import Layout from "../components/layout";
import Collage from "../components/collage";
import SubHeader from "../components/subHeader";
import RoundButton from "../components/roundButton";
import SEO from "../components/seo";
import Scroll from "../components/scroll";
import ImageHeader from "../components/imageHeader";
import TheFuture from "../components/theFuture";
import { makeCreatorStyles } from "../styles/MakeStyles";
import companyVid from "../videos/companyVid.mp4";

const videoDescriptionFull = [
  "Getting someone's attention isn’t easy. Let us paint a",
  "clearer picture towards your audience so you can say",
  "goodbye to the guessing games.",
];

const videoDescriptionMobile = [
  "Getting someone's attention",
  "isn’t easy. Let us paint a ",
  "clearer picture towards your",
  "audience so you can say goodbye",
  "to the guessing games.",
];

const videoTitle = ["WE", "TURN", "HEADS"];

const Company = () => {
  const isMobile = window.innerWidth < 700;

  const styles = makeCreatorStyles();

  return (
    <Layout>
      <div style={styles.scrollContainer}>
        <div style={styles.pageOne}>
          <SEO title="Creator" />
          <SubHeader text="I'M A CO MPA NY" />
          <RoundButton
            text="CONTACT CONTACT CONTACT"
            size={13}
            dest="contact"
            style={styles.contact}
          />
          <Collage creator={false} />
          <Scroll text={"SEE WHAT WE CAN DO TOGETHER"} id={"two"} />
        </div>
        <div style={styles.bgVideo} id={"two"}>
          <video
            className="videoTag"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            style={styles.video}
          >
            <source src={companyVid} type="video/mp4" />
          </video>
          <div style={styles.videoText}>
            <ImageHeader
              title={videoTitle}
              desc={isMobile ? videoDescriptionMobile : videoDescriptionFull}
            />
          </div>
          {!isMobile && (
            <Scroll
              text={"KEEP SCROLLING"}
              id={"three"}
              style={styles.scrollTwo}
            />
          )}
        </div>
        {/* TODO: ADD TEAM AND PAST PAGE */}
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
        <TheFuture
          id={"three"}
          copyA={"WE DO MORE THAN JUST CONNECT YOU TO TALENT"}
          copyB={"WE TREAT YOUR BUSINESS LIKE OUR OWN"}
          buttonText={" JOIN US JOIN US JOIN US JOIN US "}
        />
      </div>
    </Layout>
  );
};

export default Company;

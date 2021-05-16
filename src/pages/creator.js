import React, { useRef } from "react";

//images
import Creator1 from "../images/creator1.jpg";
import Creator2 from "../images/creator2.jpeg";
import Creator3 from "../images/creator3.jpeg";

import Layout from "../components/layout";
import Collage from "../components/collage";
import SubHeader from "../components/subHeader";
import RoundButton from "../components/roundButton";
import SEO from "../components/seo";
import Scroll from "../components/scroll";
import ImageHeader from "../components/imageHeader";
import TheFuture from "../components/theFuture";
import creatorVid from "../videos/creatorVid.mp4";
import { makeCreatorStyles } from "../styles/MakeStyles";

const videoDescriptionFullA = [
  "Our goal is to empower creators to share their message",
  "through organic brand partnerships.",
  "Focus on what really matters, and let us take care of the rest",
];

const videoDescriptionFullB = [
  "We understand you, and more importantly, your audience.",
  "We only make deals that match your persona to keep your",
  "page thriving with the content your fans love.",
];

const videoDescriptionFullC = [
  "Our use of data and profile analytics enables us to",
  "accelerate growth on your page. We've mastered the",
  "algorithm so that you don't have to.",
];

const videoDescriptionMobileA =
  "Our goal is to empower creators to share their message through organic brand partnerships. Focus on what really matters, and let us take care of the rest";

const videoDescriptionMobileB =
  "We understand you, and more importantly, your audience. We only make deals that match your persona to keep your page thriving with the content your fans love.";

const videoDescriptionMobileC =
  "Our use of data and profile analytics enables us to accelerate growth on your page. We've mastered the algorithm so that you don't have to.";

const videoTitleA = ["WE MAKE", "LIFE", "EASY"];
const videoTitleB = ["WE ARE", "YOUR", "TEAM"];
const videoTitleC = ["WE HELP", "YOU", "GROW"];

const Creator = () => {
  const videoRef = useRef();
  const isMobile = window.innerWidth < 700;
  const styles = makeCreatorStyles();

  // required video handling for linkedIn browser
  if (videoRef.current) {
    const myVideo = videoRef.current;
    myVideo.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
      },
      false
    );

    // hide the controls if they're visible
    setTimeout(() => {
      if (myVideo.hasAttribute("controls")) {
        myVideo.removeAttribute("controls");
      }
    }, 1000);
  }

  return (
    <Layout>
      <div style={styles.scrollContainer}>
        <div style={styles.pageOne}>
          <SEO title="Creator" />
          <SubHeader text="I'M A CRE ATO R" />
          <RoundButton
            text="CONTACT CONTACT CONTACT "
            size={13}
            dest="contact"
            style={styles.contact}
          />
          <Collage image1={Creator1} image2={Creator2} image3={Creator3} />
          <Scroll text={"SEE WHAT WE CAN DO TOGETHER"} id={"two"} />
        </div>
        <div style={styles.bgVideo} id={"two"}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            style={styles.video}
          >
            <source src={creatorVid} type="video/mp4" />
          </video>
          <div style={styles.videoText}>
            <ImageHeader
              titleA={videoTitleA}
              titleB={videoTitleB}
              titleC={videoTitleC}
              descA={isMobile ? videoDescriptionMobileA : videoDescriptionFullA}
              descB={isMobile ? videoDescriptionMobileB : videoDescriptionFullB}
              descC={isMobile ? videoDescriptionMobileC : videoDescriptionFullC}
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
          copyA={"WE DO MORE THAN JUST CONNECT YOU TO BRANDS"}
          copyB={"WE TREAT YOU LIKE FAMILY. NOT LIKE A NUMBER"}
          buttonText={" JOIN THE FAMILY JOIN THE FAMILY "}
        />
      </div>
    </Layout>
  );
};

export default Creator;

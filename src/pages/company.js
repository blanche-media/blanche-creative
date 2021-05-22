import React, { useRef } from "react";

//images
import Company1 from "../images/company1.jpg";
import Company2 from "../images/company2.jpeg";
import Company3 from "../images/company3.png";

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
import SlideShowPage from "../components/slideShowPage";

const videoDescriptionFullA = [
  "Getting someone's attention isn’t easy. Let us paint a",
  "clearer picture towards your audience so you can say",
  "goodbye to the guessing games.",
];

const videoDescriptionFullB = [
  "Social media is hard to understand. We help you use data to",
  "maximize ROI for your campaigns. Information is power, and we",
  "put it at your fingertip.",
];

const videoDescriptionFullC = [
  "We're pioneering a new way of talent matching: based",
  "on chemistry, compatibility, and audience - rather than",
  "just the number of followers someone has",
];

const videoDescriptionMobileA =
  "Getting someone's attention isn’t easy. Let us paint a clearer picture towards your audience so you can say goodbye to the guessing games.";
const videoDescriptionMobileB =
  "Social media is hard to understand. We help you use data to maximize ROI for your campaigns. Information is power, and we put it at your fingertip.";
const videoDescriptionMobileC =
  "We're pioneering a new way of talent matching: based on chemistry, compatibility, and audience - rather than just the number of followers someone has";

const videoTitleA = ["WE", "TURN", "HEADS"];
const videoTitleB = ["USE", "MORE", "DATA"];
const videoTitleC = ["FIND", "YOUR", "MATCH"];

const Company = () => {
  const videoRef = useRef();
  const isMobile = window.innerWidth < 700;

  const styles = makeCreatorStyles();

  return (
    <Layout>
      <div style={styles.scrollContainer}>
        <div style={styles.pageOne}>
          <SEO title="Company" />
          <SubHeader text="I'M A CO MPA NY" />
          <RoundButton
            text="CONTACT CONTACT CONTACT"
            size={13}
            dest="contact"
            style={styles.contact}
          />
          <Collage image1={Company1} image2={Company2} image3={Company3} />
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
            <source src={companyVid} type="video/mp4" />
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
        <SlideShowPage>
          <TheFuture
            id={"four"}
            copyA={"WE DO MORE THAN JUST CONNECT YOU TO TALENT"}
            copyB={"WE TREAT YOUR BUSINESS LIKE OUR OWN"}
            buttonText={" JOIN US JOIN US JOIN US JOIN US "}
          />
        </SlideShowPage>
      </div>
    </Layout>
  );
};

export default Company;

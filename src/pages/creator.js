import React, { useRef } from "react";

//images
import Creator1 from "../images/creator1.jpg";
import Creator2 from "../images/creator2.jpeg";
import Creator3 from "../images/creator3.jpeg";
import FAM1 from "../images/FAM1-min.png";
import FAM2 from "../images/FAM2-min.png";
import FAM3 from "../images/FAM3-min.png";
import FAM4 from "../images/FAM4-min.png";
import FAM5 from "../images/FAM5-min.png";
import FAM6 from "../images/FAM6-min.png";
import TEAM1 from "../images/TEAM1-min.png";
import TEAM2 from "../images/TEAM2-min.png";
import TEAM3 from "../images/TEAM3-min.png";
import TEAM4 from "../images/TEAM4-min.png";
import TEAM5 from "../images/TEAM5-min.png";
import TEAM6 from "../images/TEAM6-min.png";
import PAST1 from "../images/PAST1.png";
import PAST2 from "../images/PAST2.png";
import PAST3 from "../images/PAST3.png";
import PAST4 from "../images/PAST4.png";
import PAST5 from "../images/PAST5.png";
import PAST6 from "../images/PAST6.png";

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
import ImageScroll from "../components/imageScroll";

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
        <div style={styles.slideShowPage} id={"three"}>
          <div>
            <h3 style={styles.listTitle}>THE FAMILY</h3>
            <div style={styles.listDesc}>
              What sets them apart from the crowd is their fierce growth and
              viral creativity. We’re proud to call them our family of talent.
            </div>
            <ImageScroll images={[FAM1, FAM2, FAM3, FAM4, FAM5, FAM6]} />
          </div>
        </div>
        <div style={styles.slideShowPage} id={"four"}>
          <div>
            <h3 style={styles.listTitle}>THE TEAM</h3>
            <div style={styles.listDesc}>
              Young, ambitious, and determined to win: the Blanche team is at
              your service and ready to solve any problem thrown our way.
            </div>
            <ImageScroll images={[TEAM1, TEAM2, TEAM3, TEAM4, TEAM5, TEAM6]} />
          </div>
        </div>
        <div style={styles.slideShowPage} id={"five"}>
          <div>
            <h3 style={styles.listTitle}>THE PAST</h3>
            <div style={styles.listDesc}>
              We let our clients speak for themselves. Delivering top quality
              service has always been our priority.
            </div>
            <ImageScroll images={[PAST1, PAST2, PAST3, PAST4, PAST5, PAST6]} />
          </div>
        </div>
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

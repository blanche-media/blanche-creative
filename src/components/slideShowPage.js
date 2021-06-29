import React from "react";
import ImageScroll from "./imageScroll";
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

const SlideShowPage = ({ children }) => {
  const isMobile = window.innerWidth < 700;
  const listTitleSize = isMobile ? 38 : 45;
  const listDescSize = isMobile ? 15 : 16;

  const styles = {
    slideShowPage: {
      scrollSnapAlign: isMobile ? "none" : "start",
      overflow: "auto",
      width: "100vw",
      height: isMobile ? "auto" : "100vh",
    },
    listTitle: {
      color: "white",
      textDecoration: "none",
      font: `${listTitleSize}px PublicSans-Bold, serif`,
      paddingTop: isMobile ? "10vh" : "20vh",
    },
    listDesc: {
      color: "white",
      textDecoration: "none",
      font: `${listDescSize}px PublicSans-Regular, serif`,
      letterSpacing: "0.6px",
      width: "45vw",
      lineHeight: 1.65,
    },
  };

  return (
    <div style={styles.slideShowPage} id={"three"}>
      <div style={{ marginLeft: "15vw" }}>
        <h3 style={styles.listTitle}>THE FAMILY</h3>
        <div style={styles.listDesc}>
          What sets them apart from the crowd is their fierce growth and viral
          creativity. We’re proud to call them our family of talent.
        </div>
        <ImageScroll images={[FAM1, FAM2, FAM3, FAM4, FAM5, FAM6]} />
        <h3 style={styles.listTitle}>THE TEAM</h3>
        <div style={styles.listDesc}>
          Young, ambitious, and determined to win: the Blanche team is at your
          service and ready to solve any problem thrown our way.
        </div>
        <ImageScroll images={[TEAM1, TEAM2, TEAM3, TEAM4, TEAM5, TEAM6]} />
        <h3 style={styles.listTitle}>THE PAST</h3>
        <div style={styles.listDesc}>
          We let our clients speak for themselves. Delivering top quality
          service has always been our priority.
        </div>
        <ImageScroll images={[PAST1, PAST2, PAST3, PAST4, PAST5, PAST6]} long />
      </div>
      {children}
    </div>
  );
};

export default SlideShowPage;

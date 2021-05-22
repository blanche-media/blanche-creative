export const makeCreatorStyles = () => {
  const isMobile = window.innerWidth < 700;

  return {
    scrollContainer: {
      scrollSnapType: "y proximity",
      overflowY: "scroll",
      height: "100vh",
    },
    contact: {
      position: "absolute",
      overflow: "hidden",
      right: isMobile ? "-10vw" : "-3vw",
      top: "-2vw",
    },
    pageOne: {
      position: "relative",
      overflow: "hidden",
      width: "100vw",
      height: "100vh",
      scrollSnapAlign: "center",
    },
    bgVideo: {
      width: "100vw",
      height: "100vh",
      position: "relative",
      scrollSnapAlign: "center",
    },
    video: {
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
    },
    videoText: {
      position: "absolute",
      top: "10vh",
      bottom: isMobile ? "18vh" : "10vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 5,
    },
    scrollTwo: {
      position: "absolute",
      bottom: "5.5vh",
      paddingBottom: 0,
      marginTop: 0,
    },
  };
};

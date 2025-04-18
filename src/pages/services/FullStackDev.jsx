import React from "react";
import bannerImage from "../../assets/bannerFullStack.jpeg";
import Banner from "../../components/common/Banner";

const FullStackDev = () => {
  return (
    <Banner
      title="Full-Stack Development"
      subTitle={`From frontend to backend, We're your\nFull-Stack dream team.`}
      image={bannerImage}
      currentPage="services/full-stack-development"
    />
  );
};

export default FullStackDev;

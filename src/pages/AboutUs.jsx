import React from "react";
import Banner from "../components/common/Banner";
import bannerImage from "../assets/bannerAbout.jpeg";

const AboutUs = () => {
  return (
    <Banner
      title="About Us"
      subTitle={`Empowering Your Digital\nJourney with Innovative Solutions.`}
      image={bannerImage}
      currentPage="about"
    />
  );
};

export default AboutUs;

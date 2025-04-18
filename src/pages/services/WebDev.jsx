import React from "react";
import bannerImage from "../../assets/bannerWebDev.jpeg";
import Banner from "../../components/common/Banner";

const WebDev = () => {
  return (
    <Banner
      title="Web Development"
      subTitle={`Web Development Wizards: Bringing\nyour digital dreams to life.`}
      image={bannerImage}
      currentPage="services/web-development"
    />
  );
};

export default WebDev;

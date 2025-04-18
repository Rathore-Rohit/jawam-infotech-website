import React from "react";
import bannerImage from "../../assets/bannerSwDev.jpeg";
import Banner from "../../components/common/Banner";

const SoftwareDev = () => {
  return (
    <Banner
      title="Software Development"
      subTitle={`We are turning visions into reality\nthrough expert software craftsmanship.`}
      image={bannerImage}
      currentPage="services/software-development"
    />
  );
};

export default SoftwareDev;

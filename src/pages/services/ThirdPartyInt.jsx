import React from "react";
import bannerImage from "../../assets/bannerTpi.jpeg";
import Banner from "../../components/common/Banner";

const ThirdPartyInt = () => {
  return (
    <Banner
      title="Third-Party Integration"
      subTitle={`Our Ecosystem, Our Integration:\nMaking it all work together.`}
      image={bannerImage}
      currentPage="services/third-party-integration"
    />
  );
};

export default ThirdPartyInt;

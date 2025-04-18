import React from "react";
import bannerImage from "../../assets/bannerAutomotive.jpeg";
import Banner from "../../components/common/Banner";

const Automotive = () => {
  return (
    <Banner
      title="Automotive"
      subTitle={`Driving Innovation in the Automotive Sector`}
      image={bannerImage}
      currentPage="industries/automotive"
    />
  );
};

export default Automotive;

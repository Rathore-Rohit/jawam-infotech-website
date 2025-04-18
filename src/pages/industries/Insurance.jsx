import React from "react";
import bannerImage from "../../assets/bannerInsurance.jpeg";
import Banner from "../../components/common/Banner";

const Insurance = () => {
  return (
    <Banner
      title="Insurance"
      subTitle={`Transforming the Insurance Landscape with Technology`}
      image={bannerImage}
      currentPage="industries/insurance"
    />
  );
};

export default Insurance;

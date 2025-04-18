import React from "react";
import bannerImage from "../../assets/bannerHealthcare.jpeg";
import Banner from "../../components/common/Banner";

const Healthcare = () => {
  return (
    <Banner
      title="Healthcare"
      subTitle={`Passion for Performance, Drive for Excellence`}
      image={bannerImage}
      currentPage="industries/healthcare"
    />
  );
};

export default Healthcare;

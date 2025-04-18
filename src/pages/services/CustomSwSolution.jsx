import React from "react";
import bannerImage from "../../assets/bannerCustomSw.png";
import Banner from "../../components/common/Banner";

const CustomSwSolution = () => {
  return (
    <Banner
      title="Custom Software Solutions"
      subTitle={`Turning your challenges into customized\nsoftware triumphs.`}
      image={bannerImage}
      currentPage="services/custom-software-solutions"
    />
  );
};

export default CustomSwSolution;

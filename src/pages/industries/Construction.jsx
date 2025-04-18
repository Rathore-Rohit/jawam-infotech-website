import React from "react";
import bannerImage from "../../assets/bannerConstruction.jpeg";
import Banner from "../../components/common/Banner";

const Construction = () => {
  return (
    <Banner
      title="Construction"
      subTitle={`Transforming the Insurance Landscape with Technology`}
      image={bannerImage}
      currentPage="industries/construction"
    />
  );
};

export default Construction;

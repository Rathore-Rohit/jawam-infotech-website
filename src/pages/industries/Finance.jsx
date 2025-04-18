import React from "react";
import bannerImage from "../../assets/bannerFinance.jpeg";
import Banner from "../../components/common/Banner";

const Finance = () => {
  return (
    <Banner
      title="Finance"
      subTitle={`Driving Financial Innovation Through Technology`}
      image={bannerImage}
      currentPage="industries/finance"
    />
  );
};

export default Finance;

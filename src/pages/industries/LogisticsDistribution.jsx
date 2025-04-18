import React from "react";
import bannerImage from "../../assets/bannerLogistics.jpeg";
import Banner from "../../components/common/Banner";

const LogisticsDistribution = () => {
  return (
    <Banner
      title="Logistics & Distribution"
      subTitle={`Evolutionizing Logistics & Distribution with Smart Solutions`}
      image={bannerImage}
      currentPage="industries/logistics-distribution"
    />
  );
};

export default LogisticsDistribution;

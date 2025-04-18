import React from "react";
import bannerImage from "../../assets/bannerDevopsCloud.png";
import Banner from "../../components/common/Banner";

const DevopsCloud = () => {
  return (
    <Banner
      title="DevOps and Cloud Services"
      subTitle={`Fueling efficiency and innovation with\nDevOps and Cloud expertise.`}
      image={bannerImage}
      currentPage="services/devops-cloud"
    />
  );
};

export default DevopsCloud;

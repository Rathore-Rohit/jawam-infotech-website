import React from "react";
import bannerImage from "../../assets/bannerMobApp.png";
import Banner from "../../components/common/Banner";

const MobileAppDev = () => {
  return (
    <Banner
      title="Mobile App Development"
      subTitle={`Crafting User-Centric mobile experiences\nwith precision.`}
      image={bannerImage}
      currentPage="services/mobile-app-development"
    />
  );
};

export default MobileAppDev;

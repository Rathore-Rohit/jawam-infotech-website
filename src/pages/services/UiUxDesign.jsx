import React from "react";
import bannerImage from "../../assets/bannerUiUx.jpeg";
import Banner from "../../components/common/Banner";

const UiUxDesign = () => {
  return (
    <Banner
      title="UI/UX Design"
      subTitle={`Elevating engagement through\ninnovative UI/UX expertise.`}
      image={bannerImage}
      currentPage="services/ui-ux-design"
    />
  );
};

export default UiUxDesign;

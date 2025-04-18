import React from "react";
import bannerImage from "../../assets/bannerCrm.jpeg";
import Banner from "../../components/common/Banner";

const CrmCustomization = () => {
  return (
    <Banner
      title="CRM Customization"
      subTitle={`Your CRM, Your Way:\nCustomization excellence at your service.`}
      image={bannerImage}
      currentPage="services/crm-customization"
    />
  );
};

export default CrmCustomization;

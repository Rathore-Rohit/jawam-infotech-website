import React from "react";
import bannerImage from "../../assets/bannerCrm.jpeg";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import crm1 from "../../assets/crm1.jpeg";

const CrmCustomization = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="CRM Customization"
        subTitle={`Your CRM, Your Way:\nCustomization excellence at your service.`}
        image={bannerImage}
        currentPage="services/crm-customization"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="CRM Customization"
        heading="Your CRM, Your Way: Customization excellence at your service."
        description={`In a world where customer relationships are paramount, having a Customer Relationship Management (CRM) system that precisely aligns with your business processes is indispensable. At Jawam Infotech, we specialize in CRM Customization services that empower businesses to efficiently manage and nurture their customer relationships, drive growth, and enhance operational efficiency.\n\nOur CRM Customization services are designed to be efficient, user-friendly, and tailored to your business needs. Here's what sets our CRM Customization services apart:`}
        points={[
          "Business Process Analysis",
          "User-Friendly Interface",
          "Custom Field and Form Creation",
          "Integration with Third-Party Tools",
          "Automation Rules",
          "Scalability",
        ]}
        imgSrc={crm1}
      />
    </>
  );
};

export default CrmCustomization;

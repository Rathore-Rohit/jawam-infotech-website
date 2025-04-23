import React from "react";
import bannerImage from "../../assets/bannerInsurance.jpeg";
import Banner from "../../components/common/Banner";
import IndustriesMainSection from "../../components/ui/IndustriesMainSection";

const Insurance = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Insurance"
        subTitle={`Transforming the Insurance Landscape with Technology`}
        image={bannerImage}
        currentPage="industries/insurance"
      />
      
      {/* Main Content */}
      <IndustriesMainSection
        heading="Insurance"
        cardData={[
          {
            title: "Insurtech Integration",
            description:
              "We facilitate the integration of insurtech solutions, such as telematics, IoT, and blockchain, to enhance underwriting accuracy, risk management, and customer engagement.",
          },
          {
            title: "Data Analytics for Insurance",
            description:
              "Our data analytics solutions offer valuable insights into customer behavior, risk assessment, and operational performance, empowering insurers to make informed decisions.",
          },
          {
            title: "Claims Processing Solutions",
            description:
              "Our claims processing solutions leverage automation and data analytics to expedite claims assessment, enhance accuracy, and improve the overall claims experience for policyholders.",
          },
          {
            title: "Policy Administration Systems",
            description:
              "We develop robust policy administration systems that streamline the creation, management, and maintenance of insurance policies, improving operational efficiency.",
          },
        ]}
      />
    </>
  );
};

export default Insurance;

import React from "react";
import bannerImage from "../../assets/bannerHealthcare.jpg";
import Banner from "../../components/common/Banner";
import IndustriesMainSection from "../../components/ui/IndustriesMainSection";

const Healthcare = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Healthcare"
        subTitle={`Passion for Performance, Drive for Excellence`}
        image={bannerImage}
        currentPage="industries/healthcare"
      />

      {/* Main Content */}
      <IndustriesMainSection
        heading="Healthcare"
        cardData={[
          {
            title: "Custom Healthcare Software",
            description:
              "We design and develop custom healthcare software that streamlines operations, enhances patient care, and improves the overall healthcare experience.",
          },
          {
            title: "Healthcare Analytics",
            description:
              "Our healthcare analytics solutions empower providers and organizations to make data-driven decisions, leading to better patient outcomes and cost savings.",
          },
          {
            title: "Patient Engagement Tools",
            description:
              "We develop tools and applications that enhance patient engagement, allowing individuals to actively participate in their healthcare journey.",
          },
          {
            title: "Security and Compliance",
            description:
              "We prioritize data security and compliance with healthcare regulations, safeguarding patient information and maintaining trust.",
          },
        ]}
      />
    </>
  );
};

export default Healthcare;

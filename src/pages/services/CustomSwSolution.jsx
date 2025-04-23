import React from "react";
import bannerImage from "../../assets/bannerCustomSw.png";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import customSwSol1 from "../../assets/customSwSol1.jpg";

const CustomSwSolution = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Custom Software Solutions"
        subTitle={`Turning your challenges into customized\nsoftware triumphs.`}
        image={bannerImage}
        currentPage="services/custom-software-solutions"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="Custom Software Solutions"
        heading="Turning your challenges into customized software triumphs."
        description={`In today's fast-paced and competitive business landscape, off-the-shelf software solutions often fall short of meeting the unique needs and requirements of a company. That's where custom software solutions from Jawam Infotech come into play. We specialize in creating tailored software applications that empower businesses with efficiency, scalability, and a competitive edge.\n\nWe believe that no two businesses are the same, and neither should their software solutions be. We take a comprehensive approach to creating custom software that aligns with your unique goals and processes. Here's what sets our custom software solutions apart:`}
        points={[
          "Needs Assessment",
          "Testing and Quality Assurance",
          "Custom Development",
          "Deployment and Training",
          "Technological Expertise",
          "Ongoing Support",
          "Agile Development",
        ]}
        imgSrc={customSwSol1}
      />
    </>
  );
};

export default CustomSwSolution;

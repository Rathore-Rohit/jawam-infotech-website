import React from "react";
import bannerImage from "../../assets/bannerDevopsCloud.jpg";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import devopsCloud1 from "../../assets/devopsCloud1.jpeg";

const DevopsCloud = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="DevOps and Cloud Services"
        subTitle={`Fueling efficiency and innovation with\nDevOps and Cloud expertise.`}
        image={bannerImage}
        currentPage="services/devops-cloud"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="DevOps and Cloud services"
        heading="Fueling efficiency and innovation with DevOps and Cloud expertise."
        description={`In today's highly dynamic and competitive business environment, the ability to deliver high-quality software quickly and efficiently is paramount. DevOps practices, coupled with the power of cloud computing, have revolutionized the way businesses develop, deploy, and manage their software.\n\nAt Jawam Infotech, we believe that a well-implemented DevOps strategy combined with cloud infrastructure can lead to superior business outcomes. Our DevOps and Cloud solutions are designed to transform your software development and deployment processes, enhancing efficiency and reliability. Here’s what sets our DevOps and Cloud services apart:`}
        points={[
          "Customized Solutions",
          "Security Best Practices",
          "Expert Team",
          "Monitoring and Optimization",
          "Cloud Expertise",
        ]}
        imgSrc={devopsCloud1}
      />
    </>
  );
};

export default DevopsCloud;

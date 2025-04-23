import React from "react";
import bannerImage from "../../assets/bannerFullStack.jpeg";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import fullStackDev1 from "../../assets/fullStackDev1.jpg";

const FullStackDev = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Full-Stack Development"
        subTitle={`From frontend to backend, We're your\nFull-Stack dream team.`}
        image={bannerImage}
        currentPage="services/full-stack-development"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="Full-stack Development"
        heading="From frontend to backend, We're your Full-Stack dream team."
        description={`In the ever-evolving world of technology, businesses need versatile solutions that adapt to their unique requirements. This is where Full-Stack Development comes into play, and at Jawam Infotech, we excel in providing end-to-end development services that encompass the entire technology stack.\n\nWe have a team of experienced and dedicated Full-Stack Developers who can seamlessly blend their expertise in both front-end and back-end technologies. Here's what sets our Full-Stack Development services apart:`}
        points={[
          "Versatility",
          "Responsive Design",
          "End-to-End Solutions",
          "Scalability",
          "Time and Cost Efficiency",
        ]}
        imgSrc={fullStackDev1}
      />
    </>
  );
};

export default FullStackDev;

import React from "react";
import bannerImage from "../../assets/bannerQaTesting.png";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import qaTesting1 from "../../assets/qaTesting1.jpeg";

const QaTesting = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="QA Testing"
        subTitle={`Ensuring software excellence through\nrigorous QA Testing.`}
        image={bannerImage}
        currentPage="services/qa-testing"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="QA Testing"
        heading="Ensuring software excellence through rigorous QA Testing."
        description={`We believe that effective QA testing are crucial for the success of any software project. Our QA Testing services are designed to be thorough, efficient, and tailored to the unique needs of your business.\n\nWe test individual functions and features of your software to ensure they work as intended. We evaluate the speed, stability, and responsiveness of your software under various conditions to identify and address performance bottlenecks. Here's what sets our QA Testing services apart:`}
        points={[
          "Customized Testing Strategies",
          "Bug Tracking and Reporting",
          "Experienced Testers",
          "Continuous Feedback",
          "Rigorous Testing",
          "Commitment to Quality",
          "Automation",
        ]}
        imgSrc={qaTesting1}
      />
    </>
  );
};

export default QaTesting;

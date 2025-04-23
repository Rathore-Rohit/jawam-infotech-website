import React from "react";
import bannerImage from "../../assets/bannerUiUx.jpeg";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import uiux1 from "../../assets/uiux1.jpeg";

const UiUxDesign = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="UI/UX Design"
        subTitle={`Elevating engagement through\ninnovative UI/UX expertise.`}
        image={bannerImage}
        currentPage="services/ui-ux-design"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="UI/UX Design"
        heading="Elevating engagement through innovative UI/UX expertise."
        description={`In the digital realm, where user experience reigns supreme, a visually appealing and intuitive interface coupled with seamless user interactions can make all the difference. At Jawam Infotech, we take pride in crafting exceptional UI/UX designs that elevate user satisfaction, boost engagement, and enhance your brand’s online presence.\n\nUser Interface (UI) and User Experience (UX) design are at the heart of every successful digital product. A well-designed UI ensures that your application or website looks visually appealing and is easy to navigate, while a thoughtful UX ensures that users enjoy a seamless and enjoyable interaction with your digital presence.\n\nWe understand that great UI/UX design is not just about us aesthetics; it's about us creating a seamless and enjoyable user journey. Our UI/UX designers are passionate about us creating designs that strike the perfect balance between aesthetics and functionality. Here’s what sets our UI/UX design services apart:`}
        points={[
          "User-Centered Design",
          "Information Architecture",
          "Creative Innovation",
          "Interactive Prototyping",
          "Responsive Design",
          "Accessibility",
        ]}
        imgSrc={uiux1}
      />
    </>
  );
};

export default UiUxDesign;

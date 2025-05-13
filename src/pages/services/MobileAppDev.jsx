import React from "react";
import bannerImage from "../../assets/bannerMobApp.jpg";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import mobileAppDev1 from "../../assets/mobileAppDev1.jpg";

const MobileAppDev = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Mobile App Development"
        subTitle={`Crafting User-Centric mobile experiences\nwith precision.`}
        image={bannerImage}
        currentPage="services/mobile-app-development"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="Mobile App Development"
        heading="Crafting User-Centric mobile experiences with precision."
        description="In a world where mobile devices have become an integral part of our daily lives, having a strong mobile presence is essential for businesses looking to engage their audience and stay competitive. At Jawam Infotech, we specialize in creating custom mobile applications that deliver exceptional user experiences and drive business growth. Here's what sets our mobile app development services apart:"
        points={[
          "Customized Solutions",
          "Quality Assurance",
          "User-Centered Design",
          "App Store Submission",
          "Back-End Integration",
          "Native App Development",
          "Cross-Platform App Development",
          "Maintenance and Updates",
        ]}
        imgSrc={mobileAppDev1}
      />
    </>
  );
};

export default MobileAppDev;

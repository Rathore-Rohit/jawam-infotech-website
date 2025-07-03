import bannerImage from "../../assets/bannerTpi.webp";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import thirdParty1 from "../../assets/thirdParty1.webp";

const ThirdPartyInt = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Third-Party Integration"
        subTitle={`Our Ecosystem, Our Integration:\nMaking it all work together`}
        image={bannerImage}
        currentPage="services/third-party-integration"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="Third-Party Integration"
        heading="Our Ecosystem, Our Integration: Making it all work together."
        description={`In today's interconnected digital world, the ability to seamlessly integrate third-party services and tools into your applications can significantly enhance functionality, extend capabilities, and improve the overall user experience. At Jawam Infotech, we specialize in Third-Party Integration services that empower businesses to harness the full potential of external solutions.\n\nWe understand the importance of strategic Third-Party Integration. Our approach to Third-Party Integration is designed to be efficient, secure, and tailored to your business needs. Here’s what sets our Third-Party Integration services apart:`}
        points={[
          "Customized Solutions",
          "Extend Functionality",
          "Expertise",
          "Enhance User Experience",
          "Security and Data Privacy",
          "Access Data and Services",
          "Scalability",
        ]}
        imgSrc={thirdParty1}
      />
    </>
  );
};

export default ThirdPartyInt;

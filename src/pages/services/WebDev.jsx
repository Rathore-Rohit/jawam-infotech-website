import bannerImage from "../../assets/bannerWebDev.webp";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import webDev1 from "../../assets/webDev1.jpg";

const WebDev = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Web Development"
        subTitle={`Web Development Wizards: Bringing\nyour digital dreams to life`}
        image={bannerImage}
        currentPage="services/web-development"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="Web Development"
        heading="Web Development Wizards: Bringing your digital dreams to life."
        description={`We understand that the online presence of your business is crucial in today's digital age. A well-designed and user-friendly website can make all the difference in attracting and retaining customers.\n\nOur web development services are designed to create highly functional and aesthetically pleasing websites that cater to your unique business needs. We believe in a holistic approach to web development, combining cutting-edge technology, creative design, and a focus on user experience by following approaches like:`}
        points={[
          "Custom Solutions",
          "User-Centric Approach",
          "Responsive Design",
          "Security",
          "Cutting-Edge Technologies",
        ]}
        imgSrc={webDev1}
      />
    </>
  );
};

export default WebDev;

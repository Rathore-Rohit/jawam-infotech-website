import bannerImage from "../../assets/bannerSwDevelopment.jpg";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import softwareDev1 from "../../assets/softwareDev1.webp";

const SoftwareDev = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Software Development"
        subTitle={`We are turning visions into reality\nthrough expert software craftsmanship.`}
        image={bannerImage}
        currentPage="services/software-development"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="Software Development"
        heading="We are turning visions into reality through expert software craftsmanship."
        description="We are passionate about Us turning innovative ideas into robust, scalable, and high-performance software solutions. Our software development services are at the core of what we do, and we take pride in our ability to craft cutting-edge applications that drive your business forward. We follow the approach"
        points={[
          "Understanding Your Vision",
          "Scalability & Performance",
          "Strategic Planning",
          "User-Centric Design",
          "Customised Solutions",
          "Quality Assurance",
          "Agile Development",
          "Ongoing Support",
        ]}
        imgSrc={softwareDev1}
      />
    </>
  );
};

export default SoftwareDev;

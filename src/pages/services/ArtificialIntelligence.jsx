import bannerImage from "../../assets/bannerAI.webp";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import AI1 from "../../assets/AI1.webp";

const ArtificialIntelligence = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Artificial Intelligence"
        subTitle={`Empowering smarter decisions and automation\n through intelligent machine learning solutions`}
        image={bannerImage}
        currentPage="services/artificial-intelligence"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="Artificial Intelligence"
        heading="Empowering your business with intelligent automation"
        description={`In today’s tech-driven world, Artificial Intelligence is transforming how businesses operate and make decisions. At Jawam Infotech, we build AI solutions tailored to your business needs from predictive analytics to intelligent automation that enhance efficiency, accuracy, and user experience.\n\n Our AI services are built to be scalable, reliable, and deeply integrated into your workflows. Here’s what sets our AI solutions apart:`}
        points={[
          "Predictive Analytics",
          "Intelligent Automation",
          "Natural Language Processing",
          "Computer Vision Solutions",
          "AI-Powered Chatbots",
          "Recommendation Engines",
          "AI Model Training & Optimization",
          "Business Process Automation",
        ]}
        imgSrc={AI1}
      />
    </>
  );
};

export default ArtificialIntelligence;


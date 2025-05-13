import bannerImage from "../../assets/bannerDevops.jpeg";
import Banner from "../../components/common/Banner";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import TechnologiesMainSection from "../../components/ui/TechnologiesMainSection";
import aiLogo from "../../assets/ai.jpg";
import cloudComputingLogo from "../../assets/cloudComputing.png";
import awsLogo from "../../assets/aws.png";
import iotLogo from "../../assets/iot.jpg";
import azureLogo from "../../assets/azure.jpeg";
import mlLogo from "../../assets/ml.jpg";
import blockChainLogo from "../../assets/blockChain.jpg";

const Devops = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="DevOps"
        subTitle={`Agility, Automation, and Efficiency\n– Our DevOps Core Principles.`}
        image={bannerImage}
        currentPage="technologies/devops"
      />

      {/* Steps to Select Right Technology Stack */}
      <TechnologiesMainSection
        heading="DevOps"
        technologies={[
          {
            logoSrc: aiLogo,
            title: "Artificial Intelligence",
            description:
              "Technology that enables machines to mimic human intelligence and decision-making.",
          },
          {
            logoSrc: cloudComputingLogo,
            title: "Cloud Computing",
            description:
              "The delivery of computing services like storage, servers, and databases over the internet.",
          },
          {
            logoSrc: awsLogo,
            title: "AWS",
            description:
              "A leading cloud platform offering scalable infrastructure and services for web applications.",
          },
          {
            logoSrc: iotLogo,
            title: "Internet Of Things",
            description:
              "A network of physical devices connected via the internet, enabling data exchange and automation.",
          },
          {
            logoSrc: azureLogo,
            title: "Azure",
            description:
              "A cloud computing platform by Microsoft for building, testing, and deploying applications.",
          },
          {
            logoSrc: mlLogo,
            title: "Machine Learning",
            description:
              "A subset of AI that enables systems to learn from data and improve without explicit programming.",
          },
          {
            logoSrc: blockChainLogo,
            title: "Block Chain",
            description:
              "A decentralized digital ledger that ensures secure, transparent, and tamper-proof transactions.",
          },
        ]}
      />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </>
  );
};

export default Devops;

import bannerImage from "../../assets/bannerAutomotive.jpeg";
import Banner from "../../components/common/Banner";
import IndustriesMainSection from "../../components/ui/IndustriesMainSection";

const Automotive = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Automotive"
        subTitle={`Driving Innovation in the Automotive Sector`}
        image={bannerImage}
        currentPage="industries/automotive"
      />

      {/* Main Content */}
      <IndustriesMainSection
        heading="Automotive"
        cardData={[
          {
            title: "Connected Car Solutions",
            description:
              "We develop cutting-edge solutions for connected cars, leveraging IoT technologies to enhance vehicle connectivity, safety features, and overall driving experiences.",
          },
          {
            title: "Vehicle Diagnostics Apps",
            description:
              "Our applications facilitate real-time vehicle diagnostics, predictive maintenance, and service scheduling, ensuring optimal performance and reducing downtime for vehicle owners.",
          },
          {
            title: "Supply Chain Management Software",
            description:
              "Our supply chain management software streamlines logistics, inventory management, and production processes, optimizing the end-to-end supply chain for automotive manufacturers.",
          },
          {
            title: "Sustainable Manufacturing Solutions",
            description:
              "We support automotive manufacturers in adopting eco-friendly practices by providing software solutions for sustainable manufacturing, waste reduction, and energy efficiency.",
          },
        ]}
      />
    </>
  );
};

export default Automotive;

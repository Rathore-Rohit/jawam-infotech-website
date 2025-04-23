import React from "react";
import bannerImage from "../../assets/bannerLogistics.jpeg";
import Banner from "../../components/common/Banner";
import IndustriesMainSection from "../../components/ui/IndustriesMainSection";

const LogisticsDistribution = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Logistics & Distribution"
        subTitle={`Evolutionizing Logistics & Distribution with Smart Solutions`}
        image={bannerImage}
        currentPage="industries/logistics-distribution"
      />

      {/* Main Content */}
      <IndustriesMainSection
        heading="Logistics & Distribution"
        cardData={[
          {
            title: "Real-time Tracking and Visibility",
            description:
              "Our solutions offer real-time tracking and visibility into the movement of goods, providing stakeholders with accurate and up-to-date information for better decision-making.",
          },
          {
            title: "Warehouse Management Systems",
            description:
              "We provide advanced WMS solutions that optimize warehouse operations, from inventory management to order fulfillment, ensuring maximum efficiency.",
          },
          {
            title: "Last-Mile Delivery Optimization",
            description:
              "Our last-mile delivery optimization solutions leverage smart algorithms and route planning to streamline the delivery process, reducing costs and enhancing customer satisfaction.",
          },
          {
            title: "Data Analytics for Logistics Optimization",
            description:
              "We harness the power of data analytics to provide actionable insights into logistics operations, enabling data-driven decision-making for route optimization, resource allocation, and more.",
          },
        ]}
      />
    </>
  );
};

export default LogisticsDistribution;

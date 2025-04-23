import React from "react";
import bannerImage from "../../assets/bannerRetailEcom.jpeg";
import Banner from "../../components/common/Banner";
import IndustriesMainSection from "../../components/ui/IndustriesMainSection";

const RetailEcommerce = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Retail & E-commerce"
        subTitle={`Elevating retail experiences with innovative technology solutions`}
        image={bannerImage}
        currentPage="industries/retail-ecommerce"
      />

      {/* Main Content */}
      <IndustriesMainSection
        heading="Retail & E-Commerce"
        cardData={[
          {
            title: "E-Commerce Revolution",
            description:
              "We provide robust e-commerce solutions that enable retailers to establish a strong online presence, ensuring a seamless and personalised shopping experience for customers.",
          },
          {
            title: "Customer Engagement Platforms",
            description:
              "Our solutions facilitate enhanced customer engagement through personalised marketing, loyalty programs, and targeted promotions that drive brand loyalty.",
          },
          {
            title: "Inventory Optimization Tools",
            description:
              "We offer smart inventory management tools that optimise stock levels, streamline supply chain processes, and reduce operational costs for retailers.",
          },
          {
            title: "Technology Integration Services",
            description:
              "We facilitate the seamless integration of modern technologies such as AI, AR, and other smart retail solutions to enhance the overall customer experience and streamline operations.",
          },
        ]}
      />
    </>
  );
};

export default RetailEcommerce;

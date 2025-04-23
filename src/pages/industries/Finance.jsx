import React from "react";
import bannerImage from "../../assets/bannerFinance.jpeg";
import Banner from "../../components/common/Banner";
import IndustriesMainSection from "../../components/ui/IndustriesMainSection";

const Finance = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Finance"
        subTitle={`Driving Financial Innovation Through Technology`}
        image={bannerImage}
        currentPage="industries/finance"
      />

      {/* Main Content */}
      <IndustriesMainSection
        heading="Finance"
        cardData={[
          {
            title: "Financial Software Development",
            description:
              "Our financial software solutions cover a broad spectrum, including banking applications, investment platforms, risk management tools, and more, tailored to meet the specific needs of our clients.",
          },
          {
            title: "Regulatory Compliance Software",
            description:
              "We design compliance solutions that help financial institutions navigate complex regulatory landscapes, ensuring adherence to global and local financial regulations.",
          },
          {
            title: "Data Analytics for Finance",
            description:
              "We provide data analytics solutions that deliver actionable insights into financial data, empowering businesses and financial institutions to make informed decisions.",
          },
          {
            title: "Mobile Banking Apps",
            description:
              "Our mobile banking applications provide a user-friendly interface, enabling customers to manage their accounts, make transactions, and access financial services from their mobile devices.",
          },
        ]}
      />
    </>
  );
};

export default Finance;

import React from "react";
import bannerImage from "../../assets/bannerRetailEcom.jpeg";
import Banner from "../../components/common/Banner";

const RetailEcommerce = () => {
  return (
    <Banner
      title="Retail & E-commerce"
      subTitle={`Elevating retail experiences with innovative technology solutions`}
      image={bannerImage}
      currentPage="industries/retail-ecommerce"
    />
  );
};

export default RetailEcommerce;

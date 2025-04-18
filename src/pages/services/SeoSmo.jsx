import React from "react";
import bannerImage from "../../assets/bannerSeoSmo.png";
import Banner from "../../components/common/Banner";

const SeoSmo = () => {
  return (
    <Banner
      title="SEO/SMO"
      subTitle={`Boosting your online presence\nwith SEO/SMO excellence.`}
      image={bannerImage}
      currentPage="services/seo-smo"
    />
  );
};

export default SeoSmo;

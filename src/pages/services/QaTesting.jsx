import React from "react";
import bannerImage from "../../assets/bannerQaTesting.png";
import Banner from "../../components/common/Banner";

const QaTesting = () => {
  return (
    <Banner
      title="QA Testing"
      subTitle={`Ensuring software excellence through\nrigorous QA Testing.`}
      image={bannerImage}
      currentPage="services/qa-testing"
    />
  );
};

export default QaTesting;

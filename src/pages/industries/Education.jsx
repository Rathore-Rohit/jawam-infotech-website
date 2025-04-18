import React from "react";
import bannerImage from "../../assets/bannerEducation.jpeg";
import Banner from "../../components/common/Banner";

const Education = () => {
  return (
    <Banner
      title="Education"
      subTitle={`Shaping the Future of Education Through Innovation`}
      image={bannerImage}
      currentPage="industries/education"
    />
  );
};

export default Education;

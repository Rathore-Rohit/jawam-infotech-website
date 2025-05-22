import bannerImage from "../../assets/bannerEducation.webp";
import Banner from "../../components/common/Banner";
import IndustriesMainSection from "../../components/ui/IndustriesMainSection";

const Education = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Education"
        subTitle={`Shaping the Future of Education Through Innovation`}
        image={bannerImage}
        currentPage="industries/education"
      />

      {/* Main Content */}
      <IndustriesMainSection
        heading="Education"
        cardData={[
          {
            title: "Data Analytics for Education",
            description:
              "We leverage data analytics to provide valuable insights int jii o student performance, learning trends, and areas for improvement, enabling educators to make informed decisions.",
          },
          {
            title: "Learning Management Systems (LMS)",
            description:
              "We develop cutting-edge Learning Management Systems that provide a centralized platform for course management, content delivery, and student engagement.",
          },
          {
            title: "Student Information Systems (SIS)",
            description:
              "We design Student Information Systems that streamline administrative tasks, manage student records, and enhance communication between educators, students, and parents.",
          },
          {
            title: "Mobile Learning Apps",
            description:
              "Our mobile learning apps bring education to the fingertips of students, providing anytime, anywhere access to educational resources and fostering continuous learning.",
          },
        ]}
      />
    </>
  );
};

export default Education;

import bannerImage from "../../assets/bannerDataEng.webp";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import DataEng1 from "../../assets/DataEng1.webp";

const DataEngineering = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Data Engineering"
        subTitle={`Building robust data pipelines to ensure clean, reliable, and\n scalable data infrastructure`}
        image={bannerImage}
        currentPage="services/data-engineering"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="Data Engineering"
        heading="Building the backbone of your data-driven future"
        description={`Clean, reliable, and well-structured data is the foundation of any successful digital strategy. At Jawam Infotech, our Data Engineering services help businesses collect, process, and manage large-scale data systems to power analytics, reporting, and AI initiatives.\n\n Our data engineering solutions ensure your data infrastructure is modern, scalable, and secure. Here's what makes us stand out:`}
        points={[
          "Predictive Analytics",
          "ETL/ELT Process Implementation",
          "Cloud Data Warehousing",
          "Real-Time Data Streaming",
          "Data Lake Design & Management",
          "Data Quality & Governance",
          "Big Data Integration",
          "Database Optimization & Maintenance",
        ]}
        imgSrc={DataEng1}
      />
    </>
  );
};

export default DataEngineering;


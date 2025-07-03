import bannerImage from "../../assets/bannerSeoSmo.jpg";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import seoSmo1 from "../../assets/seosmo1.webp";

const SeoSmo = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="SEO/SMO"
        subTitle={`Boosting your online presence\nwith SEO/SMO excellence`}
        image={bannerImage}
        currentPage="services/seo-smo"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="SEO/SMO"
        heading="Boosting your online presence with SEO/SMO excellence."
        description={`In the digital age, having a well-optimized online presence is vital for businesses looking to succeed in a competitive landscape. At Jawam Infotech, we specialize in Search Engine Optimization (SEO) and Social Media Optimization (SMO) services that drive organic traffic, improve search engine rankings, and enhance social engagement.\n\nOur SEO and SMO services are designed to be strategic, data-driven, and tailored to your specific business objectives. Here's what sets our SEO and SMO services apart:`}
        points={[
          "Comprehensive SEO Analysis",
          "Social Media Audit",
          "Keyword Research",
          "Social Media Content Creation",
          "Content Strategy",
          "On-Page and Off-Page Optimization",
          "Community Building",
        ]}
        imgSrc={seoSmo1}
      />
    </>
  );
};

export default SeoSmo;

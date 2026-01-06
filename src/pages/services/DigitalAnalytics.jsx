import bannerImage from "../../assets/bannerDigitalAnlytics.webp";
import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import DigitalAnalytics1 from "../../assets/DigitalAnalytics1.webp";

const DigitalAnalytics = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Digital Analytics"
        subTitle={`Converting digital footprints into meaningful insights\n for better strategies and outcomes`}
        image={bannerImage}
        currentPage="services/digital-analytics"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="Digital Analytics"
        heading="Transforming your data into powerful business insights"
        description={`At Jawam Infotech, we understand the value of data. Our Digital Analytics services help you uncover patterns, trends, and opportunities from user behavior, campaign performance, and platform activity. We turn raw data into clear, actionable insights that drive growth and smarter decision-making.\n\n Our analytics solutions are data-driven, performance-focused, and customized to your KPIs. Here’s what we offer:`}
        points={[
          "Website & App Analytics",
          "Campaign Tracking & Reporting",
          "Conversion Rate Optimization",
          "Funnel & User Journey Analysis",
          "Dashboard Design & Visualization",
          "Real-Time Reporting",
          "Google Analytics",
          "Customer Segmentation & Insights",
        ]}
        imgSrc={DigitalAnalytics1}
      />
    </>
  );
};

export default DigitalAnalytics;


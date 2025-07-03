import Banner from "../../components/common/Banner";
import ServicesMainSection from "../../components/ui/ServicesMainSection";
import bannerImage from "../../assets/bannerStaffAug.webp";
import staffAugmentation1 from "../../assets/staffAug1.webp";

const StaffAugmentation = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="IT Staff Augmentation"
        subTitle={`Fuel your growth with on-demand tech talent\nscale smart, move fast, and deliver better`}
        image={bannerImage}
        currentPage="services/staff-augmentation"
      />

      {/* Main Content */}
      <ServicesMainSection
        title="IT Staff Augmentation"
        heading="Empowering your team with top tech talent when and where you need it."
        description={`In a world where speed and skill define success, finding the right tech talent exactly when you need it can be a challenge. At Jawam Infotech, we eliminate hiring delays and skill shortages with our agile IT Staff Augmentation model.\n \nWhether you’re building a new product, scaling fast, or filling a critical skill gap, we empower your team with dedicated developers, engineers, designers, and QA experts handpicked to align with your goals, workflows, and timelines.`}
        points={[
          "Immediate Joiners",
          "Flexible Engagements",
          "Skilled Specialists",
          "Rapid Deployment",
          "Smooth Collaboration",
          "Clear Communication",
        ]}
        imgSrc={staffAugmentation1}
      />
    </>
  );
};

export default StaffAugmentation;

import bannerImage from "../../assets/bannerMobAppDevelopment.webp";
import Banner from "../../components/common/Banner";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import TechnologiesMainSection from "../../components/ui/TechnologiesMainSection";
import flutterLogo from "../../assets/flutter.png";
import rProgrammingLogo from "../../assets/rProgramming.png";
import javaLogo from "../../assets/java.jpg";
import nativeLogo from "../../assets/react.jpg";
import kotlinLogo from "../../assets/kotlin.png";
import swiftLogo from "../../assets/swift.jpeg";
import pythonLogo from "../../assets/python.jpeg";
import xamariLogo from "../../assets/xamari.png";

const MobAppDevelopment = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Mobile App Development"
        subTitle={`Your Mobile Success\nStarts with Our Tech Innovation`}
        image={bannerImage}
        currentPage="technologies/mobile-app-development"
      />

      {/* Steps to Select Right Technology Stack */}
      <TechnologiesMainSection
        heading="Mobile App Development"
        technologies={[
          {
            logoSrc: flutterLogo,
            title: "Flutter",
            description:
              "A Google toolkit for building cross-platform mobile apps from a single codebase.",
          },
          {
            logoSrc: rProgrammingLogo,
            title: "R Programming",
            description:
              "Used for data analysis and visualization, not typically for mobile app development.",
          },
          {
            logoSrc: javaLogo,
            title: "Java",
            description:
              "The traditional and robust language for developing native Android and mobile applications.",
          },
          {
            logoSrc: nativeLogo,
            title: "React Native",
            description:
              "A JavaScript framework by Meta for building cross-platform mobile apps using React.",
          },
          {
            logoSrc: kotlinLogo,
            title: "Kotlin",
            description:
              "A modern programming language officially supported by Google for Android app development.",
          },
          {
            logoSrc: swiftLogo,
            title: "Swift",
            description:
              "Apple's powerful programming language for building high-performance iOS applications.",
          },
          {
            logoSrc: pythonLogo,
            title: "Python",
            description:
              "While not native to mobile, Python can be used for mobile apps via frameworks like Kivy and BeeWare.",
          },
          {
            logoSrc: xamariLogo,
            title: "Xamari",
            description:
              "A Microsoft-owned framework for building cross-platform apps using C# and .NET.",
          },
        ]}
      />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </>
  );
};

export default MobAppDevelopment;

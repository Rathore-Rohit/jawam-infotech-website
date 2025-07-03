import bannerImage from "../../assets/bannerBackend.webp";
import Banner from "../../components/common/Banner";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import TechnologiesMainSection from "../../components/ui/TechnologiesMainSection";
import rorLogo from "../../assets/ror.jpeg";
import pythonLogo from "../../assets/python.jpeg";
import javaLogo from "../../assets/java.jpg";
import djangoLogo from "../../assets/django.png";
import springLogo from "../../assets/spring.jpeg";
import flaskLogo from "../../assets/flask.png";
import nodeLogo from "../../assets/node.png";
import phpLogo from "../../assets/php.png";
import expressLogo from "../../assets/express.png";
import laravelLogo from "../../assets/laravel.png";

const Backend = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Backend"
        subTitle={`Revolutionising Mobility of backend\nwith Advanced backend Technologies`}
        image={bannerImage}
        currentPage="technologies/backend"
      />

      {/* Steps to Select Right Technology Stack */}
      <TechnologiesMainSection
        heading="Backend"
        technologies={[
          {
            logoSrc: rorLogo,
            title: "Ruby On Rails",
            description:
              "A powerful server-side web framework in Ruby, known for rapid and scalable development.",
          },
          {
            logoSrc: pythonLogo,
            title: "Python",
            description:
              "A high-level, versatile programming language widely used in web development and automation.",
          },
          {
            logoSrc: javaLogo,
            title: "Java",
            description:
              "A robust, object-oriented programming language ideal for large-scale backend systems.",
          },
          {
            logoSrc: djangoLogo,
            title: "Django",
            description:
              "A high-level Python web framework that encourages rapid development and clean code.",
          },
          {
            logoSrc: springLogo,
            title: "Spring Boot",
            description:
              "A Java-based framework used to create standalone, production-ready Spring applications.",
          },
          {
            logoSrc: flaskLogo,
            title: "Flask",
            description:
              "A lightweight Python web framework ideal for simple and flexible backend solutions.",
          },
          {
            logoSrc: nodeLogo,
            title: "Node.js",
            description:
              "A JavaScript runtime that helps build fast, scalable, and efficient server-side applications.",
          },
          {
            logoSrc: phpLogo,
            title: "PHP",
            description:
              "A widely-used server-side scripting language for building dynamic web pages and applications.",
          },
          {
            logoSrc: expressLogo,
            title: "Express.js",
            description:
              "A minimal and flexible Node.js web framework for building APIs and web apps.",
          },
          {
            logoSrc: laravelLogo,
            title: "Laravel",
            description:
              "A PHP web framework that offers elegant syntax and robust tools for backend development.",
          },
        ]}
      />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </>
  );
};

export default Backend;

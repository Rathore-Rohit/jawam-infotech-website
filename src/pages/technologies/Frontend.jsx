import Banner from "../../components/common/Banner";
import WhyChooseUs from "../../components/ui/WhyChooseUs";
import TechnologiesMainSection from "../../components/ui/TechnologiesMainSection";
import bannerImage from "../../assets/bannerFrontend.jpg";
import reactLogo from "../../assets/react.jpg";
import nextLogo from "../../assets/nextJs.png";
import vueLogo from "../../assets/vueJs.png";
import angularLogo from "../../assets/angular.jpg";
import jQueryLogo from "../../assets/jquery.png";
import htmlLogo from "../../assets/html.jpg";
import cssLogo from "../../assets/css.jpg";
import jsLogo from "../../assets/js.jpg";
import bootstrapLogo from "../../assets/bootstrap.jpg";
import wordpressLogo from "../../assets/wordpress.png";

const Frontend = () => {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Frontend"
        subTitle={`Elevating User Engagement\nThrough Innovative Frontend Technologies`}
        image={bannerImage}
        currentPage="technologies/frontend"
      />

      {/* Steps to Select Right Technology Stack */}
      <TechnologiesMainSection
        heading="Frontend"
        technologies={[
          {
            logoSrc: reactLogo,
            title: "React",
            description:
              "A powerful JavaScript library for building fast, scalable, and interactive user interfaces.",
          },
          {
            logoSrc: nextLogo,
            title: "Next.js",
            description:
              "A React-based framework for server-side rendering and building SEO-friendly web apps.",
          },
          {
            logoSrc: vueLogo,
            title: "Vue.js",
            description:
              "A progressive JavaScript framework for building modern, lightweight, and interactive user interfaces.",
          },
          {
            logoSrc: angularLogo,
            title: "Angular",
            description:
              "A full-featured, TypeScript-based framework for building scalable web applications.",
          },
          {
            logoSrc: jQueryLogo,
            title: "JQuery",
            description:
              "A lightweight JavaScript library that simplifies HTML DOM manipulation and AJAX.",
          },
          {
            logoSrc: htmlLogo,
            title: "HTML",
            description:
              "The standard markup language used to structure, format, and present content on the web.",
          },
          {
            logoSrc: cssLogo,
            title: "CSS",
            description:
              "A stylesheet language used to control the appearance and layout of web pages.",
          },
          {
            logoSrc: jsLogo,
            title: "JavaScript",
            description:
              "A versatile scripting language used to create dynamic and interactive web content.",
          },
          {
            logoSrc: bootstrapLogo,
            title: "Bootstrap",
            description:
              "A popular CSS framework for building responsive, mobile-first, and visually consistent websites.",
          },
          {
            logoSrc: wordpressLogo,
            title: "Wordpress",
            description:
              "A widely-used CMS platform for building websites and managing content easily.",
          },
        ]}
      />

      {/* Why Choose Us */}
      <WhyChooseUs />
    </>
  );
};

export default Frontend;

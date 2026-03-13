import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "../theme";
import Underline from "../components/ui/Underline";
import EastIcon from "@mui/icons-material/East";
import { useTheme, useMediaQuery } from "@mui/material";
import { useRef, useState, useEffect } from "react";
// For Animation
import AOS from "aos";
import "aos/dist/aos.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";


// Swiper Imports for Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Banner Section
import bannerImage from "../assets/bannerHome.jpeg";
import bannerVideo from "../assets/bannerHomeVideo.mp4";

// Our Technology
import Backend from "../assets/backendHome.png";
import Devops from "../assets/devopsHome.png";
const ourTechnologies = [
  {
    src: Backend,
    heading: "Backend Technology",
    content: "Empowering scalable solutions with robust Backend Technologies.",
    link: "/technologies/backend",
  },
  {
    src: Devops,
    heading: "DevOps",
    content:
      "Bridging the gap between code and operations with DevOps mastery.",
    link: "/technologies/devops",
  },
  {
    src: MobAppDev,
    heading: "Mobile App Development",
    content: "Crafting seamless mobile experiences with innovative tech.",
    link: "/technologies/mobile-app-development",
  },
  {
    src: WebDev,
    heading: "Frontend Technology",
    content: "Shaping digital experiences with Our Frontend Tech expertise.",
    link: "/technologies/frontend",
  },
];

// Our Services
import SoftDev from "../assets/softwareDevHome.png";
import SoftDeveloper from "../assets/bannerSwDevelopment.webp";
import WebDev from "../assets/webDevHome.png";
import WebDeveloper from "../assets/bannerWebDev.webp";
import FullStackDev from "../assets/fullstackHome.png";
import fullStackDeveloper from "../assets/bannerFullStack.webp";
import MobAppDev from "../assets/mobAppDevHome.png";
import MobDeveloper from "../assets/bannerMobapp.webp";
import CustomSoftSol from "../assets/customSoftwareHome.png";
import CustomSoft from "../assets/customSwSol1.webp";
import UIUX from "../assets/uiuxHome.png";
import UIdesign from "../assets/bannerUiUx.webp";
import QA from "../assets/qaHome.png";
import QualityAssurance from "../assets/bannerQaTesting.webp";
import DevOpsCloud from "../assets/devopsCloudHome.png";
import Devopscloud from "../assets/bannerDevopsCloud.webp";
import TPI from "../assets/tpiHome.png";
import Thirdparty from "../assets/bannerTpi.webp";
import CRM from "../assets/crmHome.png";
import CRMM from "../assets/bannercrm.webp";
import SEO from "../assets/seoHome.png";
import SEOO from "../assets/seosmo1.webp";
import StaffAugmentation from "../assets/staffAug.png";
import Staff from "../assets/bannerStaffAug.webp";
import AI from "../assets/artificialIn.png";
import ArtificialIntelligence from "../assets/bannerAI.webp";
import DigitalAnalytics from "../assets/digitalAnalytics.png";
import DigiAnaltics from "../assets/bannerDigitalAnlytics.webp";
import DataEngineering from "../assets/dataEngineering.png";
import DataEng from "../assets/bannerDataEng.webp";
const ourServices = [
  {
    src: SoftDev,
    srcc: SoftDeveloper,
    heading: "Software Development",
    content: "We build fast, secure, and scalable software solutions.Custom development tailored to your business needs.Reliable, modern, and performance-driven applications",
    link: "/services/software-development",
  },
  {
    src: WebDev,
    srcc: WebDeveloper,
    heading: "Web Development",
    content: "We design fast, responsive, and modern websites.Custom web solutions tailored to your business goals.Secure, user-friendly, and performance-driven platforms.",
    link: "/services/web-development",
  },
  {
    src: FullStackDev,
    srcc: fullStackDeveloper,
    heading: "Full Stack Development",
    content:
      "We build complete, scalable full stack solutions.Front-end and back-end tailored to your needs.Secure, high-performance, and fully integrated systems.",
    link: "/services/full-stack-development",
  },
  {
    src: MobAppDev,
    srcc: MobDeveloper,
    heading: "Mobile App Development",
    content: "Smart mobile solutions for modern business growth.Fast, secure, and user-friendly mobile applications.High-performance apps built for Android and iOS",
    link: "/services/mobile-app-development",
  },
  {
    src: CustomSoftSol,
    srcc: CustomSoft,
    heading: "Custom Software Solutions",
    content: "Tailored software solutions designed for business growth.Custom-built systems to match your unique needs.Secure, scalable, and high-performance digital solutions.",
    link: "/services/custom-software-solutions",
  },
  {
    src: UIUX,
    srcc: UIdesign,
    heading: "UI/UX Design",
    content: "Creative UI/UX designs focused on user experience.Intuitive, modern, and visually engaging interface designs.Designs crafted to improve usability and user satisfaction.",
    link: "/services/ui-ux-design",
  },
  {
    src: QA,
    srcc: QualityAssurance,
    heading: "Quality Assurance",
    content: "Ensuring high-quality software through rigorous testing.Bug-free, reliable, and performance-optimized digital products.Quality checks designed to improve stability and reliability.",
    link: "/services/qa-testing",
  },
  {
    src: DevOpsCloud,
    srcc: Devopscloud,
    heading: "DevOps and Cloud",
    content:
      "Streamlined DevOps and cloud solutions for scalability.Automated deployment, monitoring, and infrastructure management.Secure, reliable, and high-performance cloud environments.",
    link: "/services/devops-cloud",
  },
  {
    src: TPI,
    srcc: Thirdparty,
    heading: "Third party Integration",
    content:
      "Seamless third-party integration for your business systems.Connect APIs and services for smooth functionality.Reliable, secure, and fully compatible integration solutions.",
    link: "/services/third-party-integration",
  },
  {
    src: CRM,
    srcc: CRMM,
    heading: "CRM Customization",
    content:
      "Tailored CRM customization for your business needs.Optimize workflows and manage customer interactions efficiently.Secure, scalable, and fully personalized CRM solutions.",
    link: "/services/crm-customization",
  },
  {
    src: SEO,
    srcc: SEOO,
    heading: "SEO/SMO",
    content:
      "Effective SEO and SMO strategies to boost visibility.Drivetraffic, engagement, and higher search engine rankings.Optimize online presence for measurable business growth.",
    link: "/services/seo-smo",
  },
  {
    src: StaffAugmentation,
    srcc: Staff,
    heading: "IT Staff Augmentation",
    content:
      "Skilled IT professionals to strengthen your team.Flexible staffing solutions to meet project demands.Reliable talent support for faster business growth.",
    link: "/services/staff-augmentation",
  },
  {
    src: AI,
    srcc: ArtificialIntelligence,
    heading: "Artificial Intelligence",
    content:
      "Intelligent AI solutions to enhance business processes.Machine learning and automation for smarter decision-making.Innovative, scalable, and data-driven AI applications.",
    link: "/services/artificial-intelligence",
  },
  {
    src: DataEngineering,
    srcc: DataEng,
    heading: "Data Engineering",
    content:
      "Robust data engineering solutions for reliable pipelines.Collect, process, and manage data efficiently at scale.Optimized systems to enable insights and data-driven decisions.",
    link: "/services/data-engineering",
  },
  {
    src: DigitalAnalytics,
    srcc: DigiAnaltics,
    heading: "Digital Analytics",
    content:
      "Data-driven digital analytics to track performance.Measure, analyze, and optimize business and marketing strategies.Insights and reports to improve growth and decision-making.",
    link: "/services/digital-analytics",
  },
];

// Words of Praise
import Client1 from "../assets/sanjeevKumar.jpeg";
import Client2 from "../assets/rajeshMunde.jpeg";
import Client3 from "../assets/amolChoudhary.jpeg";
import Client4 from "../assets/geeta.jpg";
import ReviewsSection from "../components/ui/ReviewsSection";
import IndustriesSection from "../components/ui/IndustriesWeServe";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import OurTrustedPartners from "../components/ui/OurTrustedPartners";

const testimonials = [
  {
    name: "Sanjeev Kumar",
    title: "Founder & COO",
    avatar: Client1,
    content: `Partnering with Jawam Infotech has truly elevated our projects at Dev Lab Alliance. Their deep technical skills, sharp understanding, and reliable delivery made a strong impact on our workflows. A tech partner we trust and look forward to working with again.`,
  },
  {
    name: "Rajesh Munde",
    title: "Founder & CEO",
    content: `Collaborating with Jawam Infotech for Pure Technology has been a seamless and rewarding experience. Their sales and technical teams were proactive, well-aligned, and delivered excellent results with innovation and speed. A truly reliable and dedicated partner we look forward to many more successful projects together.`,
    avatar: Client2,
  },
  {
    name: "Amol Choudhary",
    title: "Founder & CEO",
    content: `Jawam Infotech brought clarity and creativity to our project at Infinitive. Their team crafted a user-focused website with precision, innovation, and clear milestones. The process was smooth, collaborative, and we’d be happy to collaborate with them again on future projects.`,
    avatar: Client3,
  },
  {
    name: "Geeta Borikar",
    title: "Founder",
    content: `Had a fantastic experience working with Jawam Infotech on our website design. Their team was professional, creative, and highly responsive. The final site looks modern, works flawlessly across devices, and truly reflects our brand. They made the whole process smooth and collaborative. I’d highly recommend their services to anyone looking for top-notch website design.`,
    avatar: Client4,
  },
];

// Styles
const styles = {
  commonBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1.5,
    whiteSpace: { sm: "pre-line" },
  },
  heading: {
    color: theme.palette.text.primary,
    fontSize: "20px",
    fontWeight: 600,
    fontFamily: theme.typography.fontFamily,
    textTransform: "uppercase",
  },
  subHeading: {
    color: theme.palette.text.secondary,
    fontSize: { xs: "28px", sm: "34px", md: "36px", lg: "38px" },
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily,
    lineHeight: { xs: "36px", sm: "42px", md: "46px", lg: "48px" },
    textAlign: "center",
  },
  hoverBoxStyle: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: theme.palette.text.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.custom.white,
    cursor: "pointer",
    opacity: 0,
    transition: "bottom 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease",
    WebkitTapHighlightColor: "transparent",
    "&:hover": {
      boxShadow: "0 0 0 10px rgba(0, 174, 239, 0.2)",
    },
    "&:focus": {
      backgroundColor: "transparent",
    },
    "& svg": {
      fontSize: 20,
      transition: "color 0.3s ease",
    },
    "&:hover svg": {
      color: theme.palette.text.secondary,
    },
  },
};

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const serviceRefs = useRef({});
  const [activeService, setActiveService] = useState(ourServices.length > 0 ? ourServices[0] : null);

  const handleScrollToService = (heading) => {
    setActiveService(heading);
    serviceRefs.current[heading]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "570px",
          mt: {
            xs: "90px",
            md: 0,
          },
          overflow: "hidden",
        }}
      >
        {/* Video for Desktop, Image for Mobile */}
        {!isMobile ? (
          <Box
            component="video"
            src={bannerVideo}
            poster={bannerImage}
            autoPlay
            muted
            loop
            playsInline
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "fill",
              zIndex: 0,
            }}
          />
        ) : (
          <Box
            component="img"
            src={bannerImage}
            alt="Banner"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
        )}

        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(9, 30, 62, 0.6)",
            zIndex: 1,
          }}
        />

        {/* Text content */}
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: theme.palette.custom.white,
          }}
        >
          <Container>
            <Typography
              component="h5"
              sx={{
                textTransform: "uppercase",
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "14px", sm: "20px" },
                fontWeight: 500,
              }}
            >
              Creative & Innovative
            </Typography>
            <Typography
              component="h1"
              sx={{
                mt: 1.8,
                fontSize: { xs: "30px", sm: "62.5px", md: "72px", lg: "80px" },
                fontFamily: theme.typography.fontFamily,
                fontWeight: { xs: 500, sm: 600 },
                lineHeight: {
                  xs: "36px",
                  sm: "72.5px",
                  md: "86.5px",
                  lg: "96px",
                },
              }}
            >
              Creative & Innovative <br /> Digital Solution
            </Typography>
          </Container>
        </Box>
      </Box>

      {/* Our Technology */}
      <Box
        component="section"
        sx={{ px: { xs: 3, sm: 6, lg: 8, xl: 14 }, pt: 12 }}
      >
        <Box sx={styles.commonBox}>
          <Typography component="h5" sx={styles.heading}>
            Our Technology
          </Typography>

          <Typography component="h1" sx={styles.subHeading}>
            {`Elevating businesses With\nState-Of-The-Art Technology\nAt Jawam Infotech`}
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="3px"
            barWidth="5px"
            mBottom={{ xs: 3, sm: 4.5 }}
          />
        </Box>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          speed={2000}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}" style="border-radius: 2px; width: 12px; height: 12px; background-color: #06A3DA; margin: 0 5px;"></span>`,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "40px" }}
        >
          {ourTechnologies.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    px: { xs: 2.5, sm: 3 },
                    py: 4.5,
                  }}
                >
                  <Box
                    sx={{
                      "&:hover .hoverBox": {
                        bottom: 12.5,
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 300,
                        borderRadius: 1,
                        boxShadow: isActive
                          ? "rgba(7, 16, 63, 0.06) 0px 0px 16px 0px"
                          : 0,
                        transition: "box-shadow 0.3s ease-in-out",
                        px: 4,
                        py: { xs: 1, sm: 0 },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1.5,
                        backgroundColor: "#EEF9FF",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.src}
                        alt={item.heading}
                        sx={{
                          width: 100,
                          height: 100,
                          objectFit: "contain",
                          mb: 0.5,
                        }}
                      />

                      <Typography
                        component="h4"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: { xs: "22px", md: "23px", lg: "24px" },
                          fontWeight: 500,
                          fontFamily: theme.typography.fontFamily,
                          textAlign: "center",
                        }}
                      >
                        {item.heading}
                      </Typography>

                      <Typography
                        sx={{
                          color: theme.palette.custom.paragraph,
                          fontSize: 16,
                          fontWeight: 400,
                          textAlign: "center",
                          fontFamily: theme.typography.fontFamilySecondary,
                        }}
                      >
                        {item.content}
                      </Typography>
                    </Box>
                    <Box
                      className="hoverBox"
                      onClick={() => navigate(item.link)}
                      sx={{
                        ...styles.hoverBoxStyle,
                        bottom: -30,
                      }}
                    >
                      <EastIcon />
                    </Box>
                  </Box>
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Our Services */}
      <Box
        component="section"
        sx={{
          px: { xs: 2, sm: 4, lg: 8, xl: 14 },
          pt: 12,
        }}
      >
        <Box sx={styles.commonBox}>
          <Typography component="h5" sx={styles.heading}>
            Our Services
          </Typography>

          <Typography component="h1" sx={styles.subHeading}>
            {`Custom IT Solutions For Your\nSuccessful Business`}
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="3px"
            barWidth="5px"
            mBottom={{ xs: 6, sm: 7 }}
          />
        </Box>

        <Box
          sx={{
            backgroundColor: "#EEF9FF",
            borderRadius: "24px",
            pt: { xs: 2.5, md: 4 },
            // pt: { xs: 4, md: 5 },
            pb: { xs: 2, md: 2 },
          }}
        >
          {isMobile ? (
            /* ================= MOBILE VIEW ================= */
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, px: 1.2, overflow: "visible", }}>
              {ourServices.map((service) => (
                <Accordion
                  key={service.heading}
                  disableGutters
                  elevation={0}
                  sx={{
                    //  backgroundColor: "#F4F8FF",
                    backgroundColor: "#FFF",
                    borderRadius: "18px",
                    overflow: "visible",
                    // 🔥 THIS LINE FIXES YOUR ISSUE
                    "&:first-of-type": {
                      borderTopLeftRadius: "18px",
                      borderTopRightRadius: "18px",
                    },
                    "&:last-of-type": {
                      borderBottomLeftRadius: "18px",
                      borderBottomRightRadius: "18px",
                    },
                    "&:before": { display: "none" },
                  }}
                >
                  {/* HEADER */}
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon sx={{ color: "#0B5ED7" }} />
                    }
                    sx={{
                      px: 2.5,
                      py: 1.5,
                      "& .MuiAccordionSummary-content": {
                        alignItems: "center",
                        gap: 1.5,
                      },
                    }}
                  >
                    <Avatar
                      src={service.src}
                      sx={{
                        width: 34,
                        height: 34,
                        backgroundColor: "#EAF1FF",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#06A3DA",
                      }}
                    >
                      {service.heading}
                    </Typography>
                  </AccordionSummary>

                  {/* DROPDOWN CONTENT */}
                  <AccordionDetails sx={{ px: 2.5, pb: 2.5 }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: theme.palette.custom.paragraph,
                        mb: 2,
                      }}
                    >
                      {service.content}
                    </Typography>

                    {/* Button */}
                    <Box
                      onClick={() => navigate(service.link)}
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        px: 3,
                        py: 1.1,
                        borderRadius: "10px",
                        backgroundColor: "#06A3DA",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: 500,
                        cursor: "pointer",
                        width: "fit-content",
                        mb: 2,
                      }}
                    >
                      Learn More <EastIcon sx={{ fontSize: 18 }} />
                    </Box>


                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          ) : (
            /* ================= DESKTOP VIEW (UNCHANGED) ================= */
            <Grid
              container
              spacing={4}
              alignItems="stretch"
              sx={{
                height: "334px",            // 🔒 FIXED HEIGHT (IMPORTANT)
              }}
              display="flex"
              flexWrap="nowrap"
            >
              {/* LEFT – Vertical Services List */}
              <Grid item xs={12} md={4} >
                <Box
                  sx={{
                    backgroundColor: "#EFF9FF",
                    borderRadius: "16px",
                    p: 2,
                    height: "90%",
                    overflowY: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  {ourServices.map((service) => {
                    const isActive =
                      activeService?.heading === service.heading;

                    return (
                      <Box
                        key={service.heading}
                        onClick={() => setActiveService(service)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          p: 2,
                          mb: 1,
                          cursor: "pointer",
                          borderRadius: "12px",
                          fontSize: "14px",
                          fontWeight: 500,
                          backgroundColor: isActive ? "#fff" : "transparent",
                          color: isActive ? "#0B5ED7" : theme.palette.text.primary,
                          transition: "all 0.2s ease",
                          "&:hover": { backgroundColor: "#fff" },
                        }}
                      >
                        <Avatar
                          src={service.src}
                          sx={{
                            width: 32,
                            height: 32,
                            backgroundColor: "#EAF1FF",
                          }}
                        />
                        {service.heading}
                      </Box>
                    );
                  })}
                </Box>
              </Grid>

              {/* CENTER – Content */}
              <Grid item xs={12} md={4} lg={4}>
                {activeService && (
                  <Box
                    sx={{
                      minheight: "240px",
                      maxWidth: { md: "520px", lg: "600px" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "Flex-Start",
                      marginTop: "20px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "#000",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {activeService.heading}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 16,
                        lineHeight: "24px",
                        mb: 2,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        color: "#6A6B75",
                      }}
                    >
                      {activeService.content}
                    </Typography>

                    <Box
                      onClick={() => navigate(activeService.link)}
                      sx={{
                        backgroundColor: "#06A3DA",
                        color: "#fff",
                        px: 3,
                        py: 1,
                        borderRadius: "10px",
                        width: "fit-content",
                        cursor: "pointer",
                      }}
                    >
                      Learn More
                    </Box>
                  </Box>
                )}
              </Grid>


              {/* RIGHT – Image */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    width: "90%",
                    height: "240px", // FIXED HEIGHT (important)
                    borderRadius: "10px",
                    p: 0, // remove padding so image fills fully
                    overflow: "hidden", // crop overflow
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <Box
                    component="img"
                    src={activeService?.srcc}
                    alt="Service"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // FULL COVER
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

          )}
        </Box>
      </Box>



      {/* Industries */}
      <IndustriesSection />

      {/* Our Trusted Partners */}
      <Box component="section" sx={{ pt: 14 }}>
        <Box sx={{ ...styles.commonBox, px: 3 }}>
          <Typography component="h5" sx={styles.heading}>
            Our Trusted Partners
          </Typography>

          <Typography component="h1" sx={styles.subHeading}>
            {`Proven industry-leading partners in\ninnovation and excellence `}
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="3px"
            barWidth="5px"
            mBottom={{ xs: 6, sm: 7 }}
          />
        </Box>
        <OurTrustedPartners />
      </Box>

      {/* Words of Praise  */}
      <Box
        component="section"
        sx={{ px: { xs: 3, sm: 6, lg: 8, xl: 14 }, pt: 12 }}
      >
        <Box sx={styles.commonBox}>
          <Typography component="h5" sx={styles.heading}>
            Words of Praise
          </Typography>

          <Typography component="h1" sx={styles.subHeading}>
            {`Client stories that inspire and\nvalidate our work`}
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="3px"
            barWidth="5px"
            mtop={0}
            mBottom={{ xs: 6, sm: 7 }}
          />
        </Box>

        <Swiper
          modules={[Autoplay]}
          style={{ width: "100%" }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box px={{ xs: 1.5, sm: 3 }} py={2}>
                <Card
                  sx={{
                    height: {
                      md: "370px",
                      lg: "440px",
                      xl: "390px",
                    },
                    borderRadius: 1,
                    boxShadow: "rgba(7, 16, 63, 0.06) 0px 0px 10px 0px",
                    backgroundColor: "#EEF9FF",
                    position: "relative",
                    overflow: "visible",
                    py: { xs: 1, sm: 2, md: 2 },
                    px: { xs: 2, sm: 0.5, md: 2, lg: 1, xl: 0 },
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 70,
                      position: "absolute",
                      top: -30,
                      left: 20,
                      transform: "rotate(180deg)",
                      zIndex: 1,
                    }}
                  />
                  <CardContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb={2}
                    >
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 86, height: 86 }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        textAlign: "center",
                        whiteSpace: "pre-line",
                        color: theme.palette.custom.paragraph,
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      mt={2}
                    >
                      <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                        {testimonial.name}
                      </Typography>
                      <Typography
                        sx={{ color: theme.palette.custom.paragraph }}
                      >
                        {testimonial.title}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Trusted by Clients  */}
      <ReviewsSection />
    </>
  );
};

export default Home;


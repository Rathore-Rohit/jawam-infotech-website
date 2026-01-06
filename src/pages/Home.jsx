import { useEffect } from "react";
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

// For Animation
import AOS from "aos";
import "aos/dist/aos.css";

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
import WebDev from "../assets/webDevHome.png";
import FullStackDev from "../assets/fullstackHome.png";
import MobAppDev from "../assets/mobAppDevHome.png";
import CustomSoftSol from "../assets/customSoftwareHome.png";
import UIUX from "../assets/uiuxHome.png";
import QA from "../assets/qaHome.png";
import DevOpsCloud from "../assets/devopsCloudHome.png";
import TPI from "../assets/tpiHome.png";
import CRM from "../assets/crmHome.png";
import SEO from "../assets/seoHome.png";
import StaffAugmentation from "../assets/staffAug.png";
import AI from "../assets/artificialIn.png"; 
import DigitalAnalytics from "../assets/digitalAnalytics.png"; 
import DataEngineering from "../assets/dataEngineering.png";
const ourServices = [
  {
    src: SoftDev,
    heading: "Software Development",
    content: "Where Innovation Meets Code: Your Software Development partner.",
    link: "/services/software-development",
  },
  {
    src: WebDev,
    heading: "Web Development",
    content: "Designing, coding, and delivering excellence in Web Development.",
    link: "/services/web-development",
  },
  {
    src: FullStackDev,
    heading: "Full Stack Development",
    content:
      "End-to-End Excellence: Unleashing Full Stack Development potential.",
    link: "/services/full-stack-development",
  },
  {
    src: MobAppDev,
    heading: "Mobile App Development",
    content: "From Concept To App Store: Your mobile success partner.",
    link: "/services/mobile-app-development",
  },
  {
    src: CustomSoftSol,
    heading: "Custom Software Solutions",
    content: "Tailoring Technology To Your Needs: Custom Software at its best.",
    link: "/services/custom-software-solutions",
  },
  {
    src: UIUX,
    heading: "UI/UX Design",
    content: "Designing intuitive user journeys with creative precision.",
    link: "/services/ui-ux-design",
  },
  {
    src: QA,
    heading: "Quality Assurance",
    content: "Delivering flawless software with expert QA and Testing.",
    link: "/services/qa-testing",
  },
  {
    src: DevOpsCloud,
    heading: "DevOps and Cloud",
    content:
      "Where Development Meets Operations In The Cloud: Our expertise delivers.",
    link: "/services/devops-cloud",
  },
  {
    src: TPI,
    heading: "Third party Integration",
    content:
      "Seamlessly Connecting The Dots: Third-Party Integration expertise.",
    link: "/services/third-party-integration",
  },
  {
    src: CRM,
    heading: "CRM Customization",
    content:
      "Turning CRM Data into actionable insights with customization brilliance.",
    link: "/services/crm-customization",
  },
  {
    src: SEO,
    heading: "SEO/SMO",
    content:
      "Transforming clicks into connections with SEO and SMO excellence.",
    link: "/services/seo-smo",
  },
  {
    src: StaffAugmentation,
    heading: "IT Staff Augmentation",
    content:
      "Providing skilled developers to extend your team with speed and precision.",
    link: "/services/staff-augmentation",
  },
  {
    src: AI,
    heading: "Artificial Intelligence",
    content:
      "Powering smarter solutions with AI-driven innovation.",
    link: "/services/artificial-intelligence",
  },
  {
    src: DataEngineering,
    heading: "Data Engineering",
    content:
      "Enabling data-driven systems with scalable engineering excellence.",
    link: "/services/data-engineering",
  },
  {
    src: DigitalAnalytics,
    heading: "Digital Analytics",
    content:
      "Unlocking business insights with powerful digital analytics.",
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
        sx={{ px: { xs: 3, sm: 6, lg: 8, xl: 14 }, pt: 12 }}
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

        <Grid container spacing={{ xs: 6, md: 8 }}>
          {ourServices.map((item) => (
            <Grid
              size={{ xs: 12, sm: 6, lg: 4 }}
              key={item.heading}
              data-aos="fade-up"
            >
              <Box
                sx={{
                  height: 300,
                  px: 4,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  backgroundColor: "#EEF9FF",
                  borderRadius: 1,
                  "&:hover .hoverBox": {
                    bottom: -24,
                    opacity: 1,
                  },
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

                <Box
                  className="hoverBox"
                  onClick={() => navigate(item.link)}
                  sx={{
                    ...styles.hoverBoxStyle,
                    bottom: -50,
                  }}
                >
                  <EastIcon />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
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

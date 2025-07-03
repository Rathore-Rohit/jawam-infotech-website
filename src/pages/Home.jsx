import { useEffect } from 'react';
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

// import softwareDev1 from "../assets/softwareDev1.webp";

// For Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

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
import QATesting from "../assets/qaHome.png";
import DevOpsCloud from "../assets/devopsCloudHome.png";
import TPI from "../assets/tpiHome.png";
import CRM from "../assets/crmHome.png";
import SEO from "../assets/seoHome.png";
import StaffAugmentation from "../assets/staffAug.png";
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
    src: QATesting,
    heading: "QA and Testing",
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
];

// Industries
// import Industries from "../assets/industriesHome.jpeg";
// const paragraph1 = `As a leading IT service company, Jawam Infotech specializes in
// crafting innovative solutions that address the unique needs and
// challenges across diverse sectors. Our commitment to
// technology-driven excellence allows us to reshape industries
// globally, ensuring that our clients stay ahead in an era marked by
// rapid technological advancements.`;
// const paragraph2 = `In today's dynamic business environment, organizations encounter a
// multitude of challenges and opportunities. At Jawam Infotech, we
// embrace this complexity, leveraging our extensive expertise to
// deliver customized solutions that drive operational efficiency.
// Our approach is focused on enhancing customer experiences and
// fostering sustainable growth, enabling businesses to navigate the
// evolving landscape with confidence.`;
// const paragraph3 = `Through a deep understanding of industry-specific requirements, we
// collaborate closely with our clients to develop strategies that
// are not only effective but also forward-thinking. By integrating
// cutting-edge technologies and innovative methodologies, Jawam
// Infotech is dedicated to empowering businesses to thrive in a
// competitive marketplace, transforming challenges into
// opportunities for success.`;

// Words of Praise
import Client1 from "../assets/sanjeevKumar.jpeg";
import Client2 from "../assets/rajeshMunde.jpeg";
import Client3 from "../assets/amolChoudhary.jpeg";
import ReviewsSection from '../components/ui/ReviewsSection';
import IndustriesSection from '../components/ui/IndustriesWeServe';
const testimonials = [
  {
    name: "Sanjeev Kumar",
    title: "Founder & COO",
    content: `Working with Jawam Infotech has been a rewarding experience for Dev Lab Alliance. Their team’s professionalism, technical expertise, and commitment to timely delivery have consistently added value to our projects. Their ability to quickly understand our requirements and deliver innovative, scalable solutions has made a significant impact on our workflow and project success. Jawam Infotech has proven to be a trusted technology partner, and we look forward to continuing this collaboration on future initiative.`,
    avatar: Client1,
  },
  {
    name: "Rajesh Munde",
    title: "Founder & CEO",
    content: `I have had an outstanding opportunity of collaborating with Jawam Infotech. The sales team from Jawam Infotech has done the splendid job for Pure Technology, The resource alignment with Jawam Infotech was seamless, and their technical team delivered outstanding results. Their innovative, dedicated approach and timely delivery make them a valuable partner. ‘Your Journey to Innovation’ truly reflects their work, and we look forward to continued collaboration.`,
    avatar: Client2,
  },
  {
    name: "Amol Choudhary",
    title: "Founder & CEO",
    content: `At Infinitive, we needed a partner who understood data and could craft a creative, audience-focused service website, and we found that in Jawam Infotech. Its skilled and professional team delivered a well-researched, tailored design with clear milestones. Their unique ideas, innovative solutions, and attention to detail greatly enhanced our website. I genuinely look forward to working with them again, as their collaborative approach and dedication made the entire process smooth and highly effective.`,
    avatar: Client3,
  },
];

// Styles
const styles = {
  commonBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: { xs: 1, sm: 12, md: 26, lg: 48, xl: 48 },
    gap: 1.5,
  },
  heading: {
    color: theme.palette.text.primary,
    fontSize: "20px",
    fontWeight: 800,
    fontFamily: theme.typography.fontFamily,
    textTransform: "uppercase",
  },
  subHeading: {
    color: theme.palette.text.secondary,
    fontSize: { xs: "28px", sm: "34px", md: "36px", lg: "38px" },
    fontWeight: 900,
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
                fontWeight: { xs: 500, sm: 900 },
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
      <Box component="section" sx={{ px: { xs: 3, sm: 6, lg: 8, xl: 14 }, pt: 12 }}>
        <Box sx={styles.commonBox}>
          <Typography component="h5" sx={styles.heading}>
            Our Technology
          </Typography>

          <Typography component="h1" sx={styles.subHeading}>
            Elevating businesses With State-Of-The-Art Technology At Jawam
            Infotech
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="4px"
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
                        py: 6,
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
                          fontWeight: 700,
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
      <Box component="section" sx={{ px: { xs: 3, sm: 6, lg: 8, xl: 14 }, pt: 12 }}>
        <Box sx={styles.commonBox}>
          <Typography component="h5" sx={styles.heading}>
            Our Services
          </Typography>

          <Typography component="h1" sx={styles.subHeading}>
            Custom IT Solutions For Your Successful Business
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="4px"
            barWidth="5px"
            mBottom={{ xs: 6, sm: 7 }}
          />
        </Box>

        <Grid container spacing={{ xs: 6, md: 8 }}>
          {ourServices.map((item) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.heading} data-aos="fade-up">
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
                    fontWeight: 700,
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
      {/* <Box component="section" sx={{ px: { xs: 3, sm: 6, lg: 14 }, pt: 12 }}>
        <Box sx={styles.commonBox}>
          <Typography
            component="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "20px",
              fontWeight: 800,
              fontFamily: theme.typography.fontFamily,
              textTransform: "uppercase",
            }}
          >
            Industries
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="4px"
            barWidth="5px"
            mBottom={{ xs: 5, sm: 7 }}
          />
        </Box>

        <Grid
          container
          columnSpacing={{ xs: 0, lg: 6 }}
          rowSpacing={{ xs: 4, sm: 5, md: 6 }}
        >
          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            data-aos="zoom-in"
          >
            <Box
              component="img"
              src={Industries}
              sx={{
                width: { xs: "320px", sm: "550px", md: "650px", lg: "600px" },
              }}
            />
          </Grid>

          <Grid
            size={{ xs: 12, lg: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[paragraph1, paragraph2, paragraph3].map((text, index) => (
              <Typography
                key={index}
                sx={{
                  textAlign: "justify",
                  mt: 2,
                  mb: 2,
                  fontFamily: theme.typography.fontFamilySecondary,
                  fontSize: "16px",
                  color: theme.palette.custom.paragraph,
                }}
              >
                {text}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box> */}


      {/* <Box component="section" sx={{ px: { xs: 3, sm: 6, lg: 14 }, pt: 12 }}>
        <Grid container columnSpacing={8}>
          <Grid size={{md: 3}}>
            <Grid container direction="column">
              <Grid size={{md: 8}} sx={{ width: "100%"}}>
                            <Box sx={{ width: "100%", p: 10, backgroundColor: "red"}}></Box>
              </Grid>
              <Grid size={{md: 4}}>
                            <Box
                              component="img"
                              src={softwareDev1}
                              alt="Image"
                              sx={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 2,
                              }}
                            />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{md: 3}}>B</Grid>
          <Grid size={{md: 3}}>C</Grid>
          <Grid size={{md: 3}}>D</Grid>
        </Grid>
      </Box> */}


      <IndustriesSection/>

      {/* Words of Praise  */}
      <Box component="section" sx={{ px: { xs: 3, sm: 6, lg: 8, xl: 14 }, py: 12 }}>
        <Box sx={styles.commonBox}>
          <Typography component="h5" sx={styles.heading}>
            Words of Praise
          </Typography>

          <Typography component="h1" sx={styles.subHeading}>
            Client stories that inspire and validate our work
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="4px"
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
            600: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box px={{ xs: 1.5, sm: 3 }} py={2}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 1,
                    boxShadow: "rgba(7, 16, 63, 0.06) 0px 0px 10px 0px",
                    backgroundColor: "#EEF9FF",
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 56, height: 56, mr: 2 }}
                      />
                      <Box>
                        <Typography fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography
                          sx={{ color: theme.palette.custom.paragraph }}
                        >
                          {testimonial.title}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        textAlign: "justify",
                        whiteSpace: "pre-line",
                        color: theme.palette.custom.paragraph,
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <ReviewsSection />
    </>
  );
};

export default Home;

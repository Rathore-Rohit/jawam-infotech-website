import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/common/Banner";
import Underline from "../components/ui/Underline";
import bannerImage from "../assets/bannerAbout.webp";
import CEO from "../assets/shainkiGupta.jpeg";
import linkedin from "../assets/linkedinWhite.jpg";
import twitter from "../assets/twitter.jpeg";
import wellfound from "../assets/wellfound2.jpg";
import email from "../assets/email.png";
import {
  Box,
  Stack,
  Typography,
  Card,
  Avatar,
  Link,
  Grid,
  Button,
} from "@mui/material";
import theme from "../theme";

const ourValues = [
  {
    heading: "1. Innovation:",
    description:
      "We embrace innovation in everything we do, constantly pushing the boundaries of what's possible.",
  },
  {
    heading: "2. Excellence:",
    description:
      "We strive for excellence in quality, service, and execution, setting the highest standards for ourselves and our work.",
  },
  {
    heading: "3. Integrity:",
    description:
      "We conduct ourselves with integrity, honesty, and transparency, earning the trust and respect of our clients, partners, and colleagues.",
  },
  {
    heading: "4. Collaboration:",
    description:
      "We believe in the power of collaboration, working closely with our clients to understand their needs and deliver tailored solutions.",
  },
  {
    heading: "5. Continuous improvement:",
    description:
      "We are committed to continuous improvement, always seeking new ways to enhance our skills, processes, and services.",
  },
];

const contactPlatforms = [
  {
    imgSrc: linkedin,
    alt: "LinkedIn",
    path: "https://www.linkedin.com/in/shainkigupta/",
  },
  {
    imgSrc: email,
    alt: "Email",
    path: "mailto:shainkig@jawaminfotech.com",
  },
  {
    imgSrc: twitter,
    alt: "Twitter",
    path: "https://x.com/shainki_gu71933?t=20atwb0GEyOYadcZd-3EyQ&s=08",
  },
  {
    imgSrc: wellfound,
    alt: "Wellfound",
    path: "https://wellfound.com/u/shainki-gupta-1",
  },
];

//Styles
const styles = {
  sectionPadding: {
    px: { xs: 3, sm: 6, lg: 14 },
    py: 12,
  },
  heading: {
    color: theme.palette.text.secondary,
    fontSize: { xs: "26px", sm: "28px", md: "30px" },
    fontWeight: 800,
    fontFamily: theme.typography.fontFamily,
    mb: 1,
  },
  paragraph: {
    color: theme.palette.custom.paragraph,
    fontFamily: theme.typography.fontFamilySecondary,
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
  },
};

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      {/* Banner Section */}
      <Banner
        title="About Us"
        subTitle={`Empowering Your Digital\nJourney with Innovative Solutions`}
        image={bannerImage}
        currentPage="about"
      />

      {/* About Us Section  */}
      <Box component="section" sx={styles.sectionPadding}>
        <Box component="article" aria-labelledby="about-us">
          <Typography
            component="h5"
            sx={{
              color: theme.palette.text.primary,
              textTransform: "uppercase",
              fontSize: "20px",
              fontFamily: theme.typography.fontFamily,
              fontWeight: 800,
              mb: 1,
            }}
          >
            About Us
          </Typography>
          <Typography sx={styles.paragraph}>
            Welcome to Jawam Infotech, where innovation meets expertise to shape
            the digital future. Established in 2023, we have quickly emerged as
            a leading software development company dedicated to empowering
            businesses with cutting-edge technology solutions.
          </Typography>
          <Underline
            lineWidth="140px"
            lineHeight="4px"
            barWidth="5px"
            mtop={1.2}
            mBottom={{ xs: 5, sm: 5 }}
          />
        </Box>

        {/* Main Content Section (Story, Mission, Values) */}
        <Stack spacing={3}>
          <Box component="article" aria-labelledby="our-story">
            <Typography component="h2" sx={styles.heading}>
              Our Story
            </Typography>
            <Typography sx={styles.paragraph}>
              Founded by a team of passionate technologists, Jawam Infotech was
              born out of the vision to revolutionise the digital landscape. Our
              journey began with a simple yet ambitious goal: to provide
              businesses with transformative software solutions that drive
              growth and success.
            </Typography>
          </Box>

          <Box component="article" aria-labelledby="our-mission">
            <Typography component="h2" sx={styles.heading}>
              Our Mission
            </Typography>
            <Typography sx={styles.paragraph}>
              At Jawam Infotech, our mission is to empower businesses to thrive
              in the digital age. We believe in harnessing the power of
              technology to solve complex challenges, drive innovation, and
              create lasting value for our clients.
            </Typography>
          </Box>

          <Box component="article" aria-labelledby="our-values">
            <Typography component="h2" sx={styles.heading}>
              Our Values
            </Typography>
            <Stack spacing={{ xs: 1.7, lg: 1.5 }}>
              {ourValues.map((item, index) => (
                <Box key={index}>
                  <Typography
                    component="h4"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: "21px", sm: "23px" },
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 700,
                      mb: 0.5,
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography sx={styles.paragraph}>
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Meet Our CEO */}
      <Box component="section" sx={{ px: { xs: 3, sm: 0 }, pb: 12 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            component="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "26px", sm: "28px" },
              fontWeight: 800,
              fontFamily: theme.typography.fontFamily,
              textTransform: "uppercase",
            }}
          >
            Meet Our CEO
          </Typography>

          <Underline
            lineWidth="140px"
            lineHeight="4px"
            barWidth="5px"
            mBottom={{ xs: 5, sm: 6 }}
          />
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-up"
        >
          <Card
            sx={{
              maxWidth: 600,
              p: 3,
              boxShadow: "rgba(7, 16, 63, 0.06) 0px 0px 5px 0px",
              backgroundColor: "#EEF9FF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src={CEO}
                alt="image"
                sx={{ width: 120, height: 120, mb: 2 }}
              />
              <Typography variant="h6" fontWeight={700}>
                Shainki Gupta
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ color: theme.palette.custom.paragraph }}
              >
                Founder & CEO – Jawam Infotech
              </Typography>
              <Typography
                variant="body2"
                textAlign="center"
                sx={{ color: theme.palette.custom.paragraph, mt: 1 }}
              >
                With over a decade of experience in the IT industry, he leads
                the company with innovation, integrity, and excellence.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2.5 }}>
                {contactPlatforms.map(({ imgSrc, alt, path }, index) => (
                  <Link
                    key={index}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      "&:hover, &:focus, &:active": {
                        backgroundColor: "transparent",
                      },
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <Box
                      component="img"
                      src={imgSrc}
                      alt={alt}
                      sx={{
                        width: 30,
                        height: 28,
                        cursor: "pointer",
                        borderRadius: 1.5,
                      }}
                    />
                  </Link>
                ))}
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>

      {/* Join Our Team */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 3, sm: 5, md: 10, lg: 28 },
          pb: 12,
        }}
      >
        <Typography
          component="h5"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: { xs: "26px", sm: "28px" },
            fontWeight: 800,
            fontFamily: theme.typography.fontFamily,
            textTransform: "uppercase",
          }}
        >
          Join Our Team
        </Typography>
        <Underline
          lineWidth="140px"
          lineHeight="4px"
          barWidth="5px"
          mtop={0.8}
          mBottom={{ xs: 5, sm: 4 }}
        />
        <Typography
          sx={{
            color: theme.palette.custom.paragraph,
            fontFamily: theme.typography.fontFamilySecondary,
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: "28px",
            textAlign: "center",
          }}
        >
          Does joining a mission-driven fintech company that’s disrupting the
          financial services industry sound exciting to you? We’re always
          looking for new talent to join our team. See available openings on our
          Careers page.
        </Typography>
        <Button
          onClick={() => navigate("/careers")}
          sx={{
            backgroundColor: "#06A3DA",
            textTransform: "capitalize",
            fontSize: "16px",
            color: "white",
            px: 2,
            py: 1,
            mt: 3.2,
          }}
        >
          Visit our Careers page
        </Button>
      </Box>
    </>
  );
};

export default AboutUs;

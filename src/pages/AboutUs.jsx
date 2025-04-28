import React from "react";
import Banner from "../components/common/Banner";
import Underline from "../components/ui/Underline";
import bannerImage from "../assets/bannerAbout.jpeg";
import { Box, Stack, Typography } from "@mui/material";
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
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="About Us"
        subTitle={`Empowering Your Digital\nJourney with Innovative Solutions.`}
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
    </>
  );
};

export default AboutUs;

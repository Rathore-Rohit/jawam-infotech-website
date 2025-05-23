import {
  Box,
  Grid,
  Stack,
  Typography,
  Link,
  List,
  ListItem,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EastIcon from "@mui/icons-material/East";
import StarIcon from "@mui/icons-material/Star";
import theme from "../../theme";
import Underline from "../ui/Underline";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.jpeg";
import wellfound from "../../assets/wellfound.jpg";
import googleReviews from "../../assets/googleReviews.png";
import goodFirms from "../../assets/goodFirms.png";

const socialMedia = [
  {
    imgSrc: linkedin,
    alt: "LinkedIn",
    path: "https://www.linkedin.com/company/jawam-infotech/about/",
  },
  {
    imgSrc: facebook,
    alt: "Facebook",
    path: "https://www.facebook.com/share/SQtTtnasGXD86bEz/?mibextid=qi2Omg",
  },
  {
    imgSrc: instagram,
    alt: "Instagram",
    path: "https://www.instagram.com/jawam_infotech/",
  },
  {
    imgSrc: twitter,
    alt: "Twitter",
    path: "https://x.com/jawam23769?t=V5WOApqYT3XVQ_nFJKah9w&s=08",
  },
  {
    imgSrc: wellfound,
    alt: "Wellfound",
    path: "https://wellfound.com/company/jawam-infotech-1",
  },
];

const reviews = [
  {
    imgSrc: googleReviews,
    alt: "Google Reviews",
    path: "https://g.co/kgs/tDRtyyD",
    rating: "5.0",
  },
  {
    imgSrc: goodFirms,
    alt: "Good Firms",
    path: "https://www.goodfirms.co/company/jawam-infotech",
    rating: "5.0",
  },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Career", path: "/career" },
];

const services = [
  { label: "Software Development", path: "/services/software-development" },
  { label: "Web Development", path: "/services/web-development" },
  {
    label: "Full Stack Development",
    path: "/services/full-stack-development",
  },
  {
    label: "Mobile App Development",
    path: "/services/mobile-app-development",
  },
  {
    label: "Custom Software Solutions",
    path: "/services/custom-software-solutions",
  },
  { label: "UI/UX Design", path: "/services/ui-ux-design" },
  { label: "QA and Testing", path: "/services/qa-testing" },
  { label: "Devops and Cloud Services", path: "/services/devops-cloud" },
  {
    label: "Third-party Integration",
    path: "/services/third-party-integration",
  },
  { label: "CRM Customization", path: "/services/crm-customization" },
  { label: "SEO/SMO", path: "/services/seo-smo" },
];

const technology = [
  { label: "Ruby on Rails", path: "#" },
  { label: "Python/Django/Flask", path: "#" },
  { label: "Artificial Intelligence", path: "#" },
  { label: "Machine Learning", path: "#" },
  { label: "ReactJS", path: "#" },
  { label: "React Native", path: "#" },
  { label: "Angular", path: "#" },
  { label: "Vue.JS", path: "#" },
  { label: "Java", path: "#" },
  { label: "Dot Net", path: "#" },
  { label: "DevOps", path: "#" },
  { label: "Quality Assurance", path: "#" },
];

const headingStyle = {
  fontFamily: theme.typography.fontFamily,
  fontWeight: 600,
  fontSize: { xs: "22.7px", sm: "25.5px", lg: "28px" },
};

const commonTypographyStyles = {
  fontFamily: theme.typography.fontFamilySecondary,
  fontSize: "16px",
  fontWeight: 350,
};

const listItemStyle = {
  color: theme.palette.custom.white,
  fontFamily: theme.typography.fontFamilySecondary,
  fontSize: "16px",
  fontWeight: 350,
  display: "flex",
  alignItems: "center",
  gap: 1,
  lineHeight: 2.1,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateX(8px)",
    backgroundColor: "transparent",
  },
   "&:focus": {
    backgroundColor: "transparent",
  },
  "&:active": {
    backgroundColor: "transparent",
  },
};

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#091E3E",
          color: theme.palette.custom.white,
          pt: 6,
          pb: 6,
          pl: { xs: 3, sm: 6, md: 6, lg: 14 },
          pr: { xs: 5, sm: 38, md: 6, lg: 14 },
        }}
      >
        <Grid container rowSpacing={11} columnSpacing={8}>
          <Grid
            size={{ xs: 12, md: 12, lg: 3.6 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography sx={headingStyle}>Get In Touch</Typography>

            <Underline
              lineWidth="90px"
              lineHeight="2.5px"
              barWidth="5px"
              mtop={1.5}
              mBottom={{ xs: 3, sm: 3.2 }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                mt: 0.7,
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <LocationOnOutlinedIcon
                  sx={{ color: "#06A3DA", fontSize: 22 }}
                />
                <Typography sx={commonTypographyStyles}>
                  Plot No. 196, PU-4, 3rd Floor, Behind Malhar Mega Mall, Scheme
                  No. 54, Vijay Nagar, Indore – 452010, Madhya Pradesh, India
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailOutlinedIcon sx={{ color: "#06A3DA", fontSize: 20 }} />
                <Typography sx={commonTypographyStyles}>
                  contact@jawaminfotech.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalPhoneOutlinedIcon
                  sx={{ color: "#06A3DA", fontSize: 20 }}
                />
                <Typography sx={commonTypographyStyles}>
                  +91 99814 67849
                </Typography>
              </Box>
            </Box>
            <Stack direction="row" columnGap={3} sx={{ mt: 3 }}>
              {socialMedia.map(({ imgSrc, alt, path }, index) => (
                <Link key={index} href={path} target="_blank" rel="noopener noreferrer">
                  <Box
                    component="img"
                    src={imgSrc}
                    alt={alt}
                    sx={{
                      width: 30,
                      height: 30,
                      cursor: "pointer",
                      borderRadius: 1.5,
                    }}
                  />
                </Link>
              ))}
            </Stack>
            <Stack direction="row" columnGap={3} sx={{ mt: 3 }}>
              {reviews.map(({ imgSrc, alt, path, rating }, index) => (
                <Link key={index} href={path} target="_blank" rel="noopener noreferrer">
                  <Box
                    component="img"
                    src={imgSrc}
                    alt={alt}
                    sx={{
                      width: 111,
                      height: 55,
                      borderRadius: 1.5,
                    }}
                  />
                  <Typography
                    sx={{
                      color: theme.palette.custom.white,
                      fontFamily: theme.typography.fontFamilySecondary,
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      mt: 0.5,
                    }}
                  >
                    <StarIcon sx={{ fontSize: "18px", mr: 0.5, color: "#FFD700" }} />
                    {rating}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 4, lg: 2.8 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography sx={headingStyle}>Quick Links</Typography>

            <Underline
              lineWidth="90px"
              lineHeight="2.5px"
              barWidth="5px"
              mtop={1.5}
              mBottom={{ xs: 3, sm: 3.2 }}
            />

            <Box>
              <List disablePadding>
                {quickLinks.map(({ label, path }, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to={path}
                    sx={{ textDecoration: "none", WebkitTapHighlightColor: "transparent" }}
                  >
                    <ListItem disablePadding sx={listItemStyle}>
                      <EastIcon sx={{ color: "#06A3DA", fontSize: 20 }} />
                      {label}
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 4, lg: 2.8 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography sx={headingStyle}>Services</Typography>

            <Underline
              lineWidth="90px"
              lineHeight="2.5px"
              barWidth="5px"
              mtop={1.5}
              mBottom={{ xs: 3, sm: 3.2 }}
            />

            <Box>
              <List disablePadding>
                {services.map(({ label, path }, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to={path}
                    sx={{ textDecoration: "none", WebkitTapHighlightColor: "transparent" }}
                  >
                    <ListItem disablePadding sx={listItemStyle}>
                      <EastIcon sx={{ color: "#06A3DA", fontSize: 20 }} />
                      {label}
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 4, lg: 2.8 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography sx={headingStyle}>Technology</Typography>

            <Underline
              lineWidth="90px"
              lineHeight="2.5px"
              barWidth="5px"
              mtop={1.5}
              mBottom={{ xs: 3, sm: 3.2 }}
            />

            <Box>
              <List disablePadding>
                {technology.map(({ label, path }, index) => (
                  <Link
                    key={index}
                    component={RouterLink}
                    to={path}
                    sx={{ textDecoration: "none", cursor: "text", WebkitTapHighlightColor: "transparent" }}
                  >
                    <ListItem disablePadding sx={listItemStyle}>
                      <EastIcon sx={{ color: "#06A3DA", fontSize: 20 }} />
                      {label}
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ backgroundColor: "#061429", p: { xs: 3, sm: 3.2 } }}>
        <Typography
          sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            fontSize: "16px",
            fontWeight: 350,
            color: theme.palette.custom.white,
            textAlign: "center",
          }}
        >
          © Jawam Infotech 2025. All Rights Reserved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

import {
  Box,
  Stack,
  Typography,
  Link,
  List,
  ListItem,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ChatBot from "./ChatBot";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EastIcon from "@mui/icons-material/East";
import theme from "../../theme";
import Underline from "../ui/Underline";
import CloseIcon from "@mui/icons-material/Close";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.jpeg";
import wellfound from "../../assets/wellfound.jpg";

/* ------------------ DATA ------------------ */

const socialMedia = [
  { imgSrc: linkedin, alt: "LinkedIn", path: "https://www.linkedin.com/company/jawam-infotech/about/" },
  { imgSrc: facebook, alt: "Facebook", path: "https://www.facebook.com/share/SQtTtnasGXD86bEz/?mibextid=qi2Omg" },
  { imgSrc: instagram, alt: "Instagram", path: "https://www.instagram.com/jawam_infotech/" },
  { imgSrc: twitter, alt: "Twitter", path: "https://x.com/jawam23769?t=V5WOApqYT3XVQ_nFJKah9w&s=08" },
  { imgSrc: wellfound, alt: "Wellfound", path: "https://wellfound.com/company/jawam-infotech-1" },
];

const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
  { label: "Careers", path: "/careers" },
  { label: "Blogs", path: "/blogs" },
  { label: "Terms & Conditions", path: "terms" },
  { label: "Privacy Policy", path: "privacy" },
];

const services = [
  { label: "IT Staff Augmentation", path: "/services/staff-augmentation" },
  { label: "Custom Software Development", path: "/services/custom-software-solutions" },
  { label: "AI & Machine Learning Solutions", path: "/services/artificial-intelligence" },
  { label: "UI/UX Design", path: "/services/ui-ux-design" },
  { label: "QA & Testing", path: "/services/qa-testing" },
  { label: "DevOps & Cloud Services", path: "/services/devops-cloud" },
];

/* ------------------ STYLES ------------------ */

const headingStyle = {
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: { xs: "22px", sm: "24px", lg: "26px" },
};

const listItemStyle = {
  color: theme.palette.custom.white,
  fontFamily: theme.typography.fontFamilySecondary,
  fontSize: "15.5px",
  fontWeight: 350,
  display: "flex",
  alignItems: "flex-start",
  gap: 1,
  lineHeight: "24px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateX(8px)",
    backgroundColor: "transparent",
  },
};

const cardStyle = {
  backgroundColor: "#091E3E",
  borderRadius: 3,
  p: { xs: 1, sm: 0.5, md: 3 },
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const ratingBoxStyle = {
  backgroundColor: "#061429",
  borderRadius: 2,
  p: 1.5,
  width: 90,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 0.5,
};

const Footer = () => {
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const handleOpenTerms = () => setOpenTerms(true);
  const handleCloseTerms = () => setOpenTerms(false);

  const handleOpenPrivacy = () => setOpenPrivacy(true);
  const handleClosePrivacy = () => setOpenPrivacy(false);
  return (
    <>
      {/* MAIN FOOTER */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#091E3E",
          color: theme.palette.custom.white,
          px: { xs: 3, sm: 6, md: 8, lg: 14 },
          py: 6,
        }}
      >
        {/* FLEX CONTAINER */}
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: { xs: "flex-start", md: "center" },
            gap: { xs: 0, md: 1, lg: 4 },
          }}
        >

          {/* COMPANY */}
          <Box
            sx={{
              width: { xs: "100%", sm: "33.333%" },
            }}
          >
            <Box sx={cardStyle}>
              <Typography sx={headingStyle}>Company</Typography>
              <Underline lineWidth="80px" lineHeight="2px" barWidth="5px" mtop={1.2} mBottom={2.5} />

              <List disablePadding>
                {companyLinks.map((item, i) => (
                  item.path === "terms" ? (
                    <ListItem
                      key={i}
                      disablePadding
                      sx={{ ...listItemStyle, cursor: "pointer" }}
                      onClick={handleOpenTerms}
                    >
                      <EastIcon sx={{ color: "#06A3DA", fontSize: 18 }} />
                      {item.label}
                    </ListItem>

                  ) : item.path === "privacy" ? (

                    <ListItem
                      key={i}
                      disablePadding
                      sx={{ ...listItemStyle, cursor: "pointer" }}
                      onClick={handleOpenPrivacy}
                    >
                      <EastIcon sx={{ color: "#06A3DA", fontSize: 18 }} />
                      {item.label}
                    </ListItem>

                  ) : (
                    <Link key={i} component={RouterLink} to={item.path} underline="none">
                      <ListItem disablePadding sx={listItemStyle}>
                        <EastIcon sx={{ color: "#06A3DA", fontSize: 18 }} />
                        {item.label}
                      </ListItem>
                    </Link>
                  )
                ))}
              </List>
            </Box>
          </Box>

          {/* SERVICES */}
          <Box
            sx={{
              width: { xs: "100%", sm: "33.333%" },
            }}
          >
            <Box sx={cardStyle}>
              <Typography sx={headingStyle}>Services</Typography>
              <Underline lineWidth="80px" lineHeight="2px" barWidth="5px" mtop={1.2} mBottom={2.5} />

              <List disablePadding>
                {services.map((item, i) => (
                  <Link key={i} component={RouterLink} to={item.path} underline="none">
                    <ListItem disablePadding sx={listItemStyle}>
                      <EastIcon sx={{ color: "#06A3DA", fontSize: 18 }} />
                      {item.label}
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Box>

          {/* GET IN TOUCH */}
          <Box
            sx={{
              width: { xs: "100%", sm: "33.333%" },
            }}
          >
            <Box sx={cardStyle}>
              <Typography sx={headingStyle}>Get In Touch</Typography>
              <Underline lineWidth="80px" lineHeight="2px" barWidth="5px" mtop={1.2} mBottom={2.5} />

              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ maxWidth: 300 }}>
                  <LocationOnOutlinedIcon sx={{ color: "#06A3DA", mt: "2px", flexShrink: 0 }} />
                  <Typography fontSize="15px" lineHeight={1.6}>
                    Plot No. 196, PU-4, 3rd Floor, Behind Malhar Mega Mall, Scheme No. 54,
                    Vijay Nagar, Indore – 452010, Madhya Pradesh, India
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <EmailOutlinedIcon sx={{ color: "#06A3DA" }} />
                  <Typography fontSize="15px">contact@jawaminfotech.com</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <LocalPhoneOutlinedIcon sx={{ color: "#06A3DA" }} />
                  <Typography fontSize="15px">+91 99814 67849</Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* BOTTOM BAR */}
      <Box
        sx={{
          backgroundColor: "#061429",
          px: { xs: 3, lg: 14 },
          py: 2.5,
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          color: theme.palette.custom.white,
        }}
      >
        <Typography fontSize="15px">
          © Jawam Infotech 2025. All Rights Reserved.
        </Typography>

        <Stack direction="row" spacing={2}>
          {socialMedia.map((item, i) => (
            <Link key={i} href={item.path} target="_blank">
              <Box
                component="img"
                src={item.imgSrc}
                alt={item.alt}
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: 1.8,
                  color: theme.palette.custom.white,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.15)" },
                }}
              />
            </Link>
          ))}
        </Stack>
        <ChatBot />
      </Box>


      {/* TERMS POPUP */}
      <Dialog
        open={openTerms}
        onClose={handleCloseTerms}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            borderRadius: 3,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.text.secondary,
            fontWeight: 600,
          }}
        >
          Terms & Conditions

          <IconButton onClick={handleCloseTerms}>
            <CloseIcon sx={{ color: theme.palette.text.secondary }} />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>

          <Typography
            paragraph
            sx={{
              fontFamily: theme.typography.fontFamilySecondary,
              color: theme.palette.custom.paragraph,
              lineHeight: 1.8,
            }}
          >
            These Terms and Conditions outline the guidelines for accessing and using
            the website and services provided by Jawam Infotech. By visiting our
            website or engaging with our services, you acknowledge that you have
            read, understood, and agreed to comply with these terms. If you do not
            agree with any part of these conditions, you should refrain from using
            our website and services.
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.secondary,
              mb: 0.5,
            }}
          >
            1. Service Usage
          </Typography>

          <Typography
            paragraph
            sx={{
              fontFamily: theme.typography.fontFamilySecondary,
              color: theme.palette.custom.paragraph,
            }}
          >
            Jawam Infotech provides technology and IT-related services for businesses
            and individuals. Users are expected to use our website and services
            responsibly and only for lawful activities. Any misuse, unauthorized
            activity, or attempt to disrupt the functioning of the website or
            services is strictly prohibited.
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.secondary,
              mb: 0.5,
            }}
          >
            2. User Responsibilities
          </Typography>

          <Typography
            paragraph
            sx={{
              fontFamily: theme.typography.fontFamilySecondary,
              color: theme.palette.custom.paragraph,
            }}
          >
            When interacting with our website or submitting information through forms
            or other communication channels, users must ensure that the information
            provided is accurate and complete. Jawam Infotech will not be responsible
            for any issues arising from incorrect or misleading information shared by
            users.
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.secondary,
              mb: 0.5,
            }}
          >
            3. Ownership and Rights
          </Typography>

          <Typography
            paragraph
            sx={{
              fontFamily: theme.typography.fontFamilySecondary,
              color: theme.palette.custom.paragraph,
            }}
          >
            All digital materials available on this website, including but not
            limited to content, graphics, branding elements, and design are owned by
            Jawam Infotech or used with proper authorization. These materials may not
            be copied, reused, or distributed without written approval from the
            company.
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.secondary,
              mb: 0.5,
            }}
          >
            4. Information and Data Protection
          </Typography>

          <Typography
            paragraph
            sx={{
              fontFamily: theme.typography.fontFamilySecondary,
              color: theme.palette.custom.paragraph,
            }}
          >
            Any information shared with Jawam Infotech through the website will be
            handled with care and used only for business or service-related purposes.
            We are committed to protecting user data and maintaining confidentiality
            wherever applicable.
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.secondary,
              mb: 0.5,
            }}
          >
            5. Disclaimer of Liability
          </Typography>

          <Typography
            paragraph
            sx={{
              fontFamily: theme.typography.fontFamilySecondary,
              color: theme.palette.custom.paragraph,
            }}
          >
            While we aim to provide reliable and accurate information, Jawam Infotech
            does not guarantee that the website will always be error-free or
            uninterrupted. The company shall not be held responsible for any losses
            or damages resulting from the use of the website or its services.
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.secondary,
              mb: 0.5,
            }}
          >
            6. Legal Jurisdiction
          </Typography>

          <Typography
            paragraph
            sx={{
              fontFamily: theme.typography.fontFamilySecondary,
              color: theme.palette.custom.paragraph,
            }}
          >
            All matters related to these Terms and Conditions will be governed by the
            applicable laws of India. Any disputes arising from the use of our
            website or services will fall under the jurisdiction of the courts
            located in Madhya Pradesh.
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.secondary,
              mb: 0.5,
            }}
          >
            7. Modification of Terms
          </Typography>

          <Typography
            paragraph
            sx={{
              fontFamily: theme.typography.fontFamilySecondary,
              color: theme.palette.custom.paragraph,
            }}
          >
            Jawam Infotech reserves the right to update or revise these Terms and
            Conditions at any time. Any updates will be reflected on this page, and
            continued use of the website will be considered acceptance of the revised
            terms.
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.secondary,
              mt: 2,
            }}
          >
            Contact Information
          </Typography>

          <Typography
            sx={{
              fontFamily: theme.typography.fontFamilySecondary,
              color: theme.palette.custom.paragraph,
            }}
          >
            Email: info@jawaminfotech.com
          </Typography>

        </DialogContent>
      </Dialog>

      {/* PRIVACY POLICY POPUP */}
      <Dialog
        open={openPrivacy}
        onClose={handleClosePrivacy}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: { borderRadius: 3 },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.text.secondary,
            fontWeight: 600,
          }}
        >
          Privacy Policy

          <IconButton onClick={handleClosePrivacy}>
            <CloseIcon sx={{ color: theme.palette.text.secondary }} />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>

          <Typography paragraph sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            color: theme.palette.custom.paragraph,
            lineHeight: 1.8,
          }}>
            Jawam Infotech values the trust you place in us when you visit our
            website or interact with our services. This Privacy Policy explains
            how we collect, manage, and protect the information shared with us
            through our website and digital platforms.
          </Typography>

          <Typography sx={{ fontWeight: 600, color: theme.palette.text.secondary }}>
            Information We Collect
          </Typography>

          <Typography paragraph sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            color: theme.palette.custom.paragraph
          }}>
            To provide better services and support, we may collect certain
            types of information from users.
          </Typography>

          <Typography sx={{ fontWeight: 600, color: theme.palette.text.secondary }}>
            Information Provided by You
          </Typography>

          <Typography paragraph sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            color: theme.palette.custom.paragraph
          }}>
            When you contact us, submit an inquiry, request a consultation,
            or fill out any form on our website, we may collect information
            such as your name, email address, phone number, company details,
            and project requirements.
          </Typography>

          <Typography sx={{ fontWeight: 600, color: theme.palette.text.secondary }}>
            Technical and Usage Information
          </Typography>

          <Typography paragraph sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            color: theme.palette.custom.paragraph
          }}>
            When you browse our website, certain information may be collected
            automatically, such as device type, browser information, IP address,
            and pages you visit.
          </Typography>

          <Typography sx={{ fontWeight: 600, color: theme.palette.text.secondary }}>
            Purpose of Collecting Information
          </Typography>

          <Typography paragraph sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            color: theme.palette.custom.paragraph
          }}>
            We may use collected information for responding to inquiries,
            providing consultations, improving website functionality,
            sending updates, and monitoring website performance.
          </Typography>

          <Typography sx={{ fontWeight: 600, color: theme.palette.text.secondary }}>
            Information Sharing
          </Typography>

          <Typography paragraph sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            color: theme.palette.custom.paragraph
          }}>
            Jawam Infotech respects your privacy and does not sell or trade
            personal information. Information may only be shared with trusted
            service partners or when required by law.
          </Typography>

          <Typography sx={{ fontWeight: 600, color: theme.palette.text.secondary }}>
            Data Protection
          </Typography>

          <Typography paragraph sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            color: theme.palette.custom.paragraph
          }}>
            We take reasonable steps to protect personal information from
            unauthorized access, misuse, or loss.
          </Typography>

          <Typography sx={{ fontWeight: 600, color: theme.palette.text.secondary }}>
            Updates to This Policy
          </Typography>

          <Typography paragraph sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            color: theme.palette.custom.paragraph
          }}>
            Jawam Infotech may revise this Privacy Policy from time to time
            to reflect updates in legal requirements or business practices.
          </Typography>

          <Typography sx={{ fontWeight: 600, color: theme.palette.text.secondary }}>
            Contact Information
          </Typography>

          <Typography sx={{
            fontFamily: theme.typography.fontFamilySecondary,
            color: theme.palette.custom.paragraph
          }}>
            Email: info@jawaminfotech.com
          </Typography>

        </DialogContent>
      </Dialog>
    </>


  );
};
export default Footer;


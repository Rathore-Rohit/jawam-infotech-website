import { Box, Grid, Typography } from "@mui/material";
import theme from "../../theme";
import Underline from "../../components/ui/Underline";
import whyChooseUs from "../../assets/whyChooseUs.png";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const commonTypographyStyles = {
  color: theme.palette.custom.paragraph,
  fontSize: "16px",
  fontWeight: 400,
  fontFamily: theme.typography.fontFamilySecondary,
  lineHeight: "24px",
  textAlign: "justify",
  mb: 3,
};

const titleTypographyStyles = {
  color: theme.palette.text.secondary,
  fontSize: { xs: "21px", sm: "22px", md: "24px" },
  fontWeight: 700,
  fontFamily: theme.typography.fontFamily,
};

const descTypographyStyles = {
  color: theme.palette.custom.paragraph,
  fontSize: "16px",
  fontWeight: 400,
  fontFamily: theme.typography.fontFamilySecondary,
  lineHeight: "24px",
};

const boxStyles = {
  height: "50%",
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
  mb: { xs: 1.5, md: 0 },
};

const WhyChooseUs = () => {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 3, sm: 6, lg: 14 },
        pt: { xs: 2, md: 6, lg: 8 },
        pb: { xs: 16, md: 18, lg: 16 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { lg: 18 },
        }}
      >
        <Typography
          component="h5"
          sx={{
            textTransform: "uppercase",
            color: theme.palette.text.primary,
            fontSize: "20px",
            fontWeight: 800,
            fontFamily: theme.typography.fontFamily,
            mb: 2,
          }}
        >
          Why Choose Us ?
        </Typography>
        <Typography sx={commonTypographyStyles}>
          <span style={{ fontWeight: 500 }}>Expertise</span>: At Jawam Infotech,
          our seasoned professionals bring a wealth of expertise to every
          project, ensuring a deep understanding of your unique challenges and
          delivering solutions that go beyond expectations.
        </Typography>
        <Typography sx={commonTypographyStyles}>
          <span style={{ fontWeight: 500 }}>Custom Solutions</span>: We
          specialize in crafting bespoke solutions tailored to your specific
          needs. Our commitment to customization ensures that your project is
          not just an application but a strategic asset designed to elevate your
          business.
        </Typography>
        <Typography sx={commonTypographyStyles}>
          <span style={{ fontWeight: 500 }}>Quality Assurance</span>: Rigorous
          testing processes and a dedicated quality assurance team guarantee
          that your solution is not just functional, but flawless, meeting the
          highest standards of performance and reliability.
        </Typography>
        <Typography sx={commonTypographyStyles}>
          <span style={{ fontWeight: 500 }}>Timely Delivery</span>: Time is of
          the essence, and we value yours. With our commitment to timely
          delivery, we ensure that your project is not only completed on
          schedule but also exceeds your expectations, providing you a
          competitive edge in the market.
        </Typography>
        <Underline
          lineWidth="140px"
          lineHeight="4px"
          barWidth="5px"
          mtop={1.2}
          mBottom={{ xs: 5, sm: 7 }}
        />
      </Box>
      <Box>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={boxStyles}>
              <MilitaryTechIcon
                sx={{ color: theme.palette.text.primary, fontSize: 50 }}
              />
              <Typography component="h4" sx={titleTypographyStyles}>
                Best In Industry
              </Typography>
              <Typography sx={descTypographyStyles}>
                We are setting the standard for being Best-in-Industry
                Solutions.
              </Typography>
            </Box>
            <Box sx={boxStyles}>
              <PsychologyIcon
                sx={{ color: theme.palette.text.primary, fontSize: 50 }}
              />
              <Typography component="h4" sx={titleTypographyStyles}>
                Innovation Hub
              </Typography>
              <Typography sx={descTypographyStyles}>
                Crafting Customer-Centric Solutions in an innovative manner.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={whyChooseUs}
              alt="Image"
              sx={{
                width: { xs: "100%", sm: "670px", md: "100%" },
                height: { xs: "auto", sm: "350px", md: "auto" },
                borderRadius: 2,
                mt: { sm: 1.5, md: 6.5, lg: 0 },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={boxStyles}>
              <GroupsIcon
                sx={{ color: theme.palette.text.primary, fontSize: 50 }}
              />
              <Typography component="h4" sx={titleTypographyStyles}>
                Professional Staff
              </Typography>
              <Typography sx={descTypographyStyles}>
                Empowering Excellence with a Team of Dedicated and Professional
                Staff.
              </Typography>
            </Box>
            <Box sx={boxStyles}>
              <SupportAgentIcon
                sx={{ color: theme.palette.text.primary, fontSize: 50 }}
              />
              <Typography component="h4" sx={titleTypographyStyles}>
                24/7 Support
              </Typography>
              <Typography sx={descTypographyStyles}>
                We are providing Round-the-Clock Support Your Success Knows No
                Boundaries with Our 24/7 Commitment.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;

import { Box, Grid, Typography } from "@mui/material";
import theme from "../../theme";
import Underline from "../../components/ui/Underline";
import CheckIcon from "@mui/icons-material/Check";
import WhyChooseUs from "./WhyChooseUs";

const ServicesMainSection = ({
  title,
  heading,
  description,
  points,
  imgSrc,
}) => {
  return (
    <>
      <Box component="section" sx={{ px: { xs: 3, sm: 6, lg: 14 }, pt: 12 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Text Section */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              component="h5"
              sx={{
                textTransform: "uppercase",
                color: theme.palette.text.primary,
                fontSize: "20px",
                fontWeight: 800,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              {title}
            </Typography>
            <Typography
              component="h2"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: "25.5px", sm: "30px", md: "32px" },
                fontWeight: 800,
                fontFamily: theme.typography.fontFamily,
                pr: { lg: 10 },
                mt: { xs: 0.8, sm: 1 },
                lineHeight: { xs: "36px", sm: "40px", md: "45px" },
              }}
            >
              {heading}
            </Typography>
            <Underline
              lineWidth="140px"
              lineHeight="4px"
              barWidth="5px"
              mtop={1.2}
              mBottom={{ xs: 3, sm: 5 }}
            />
            <Typography
              sx={{
                color: theme.palette.custom.paragraph,
                fontSize: "16px",
                fontWeight: 400,
                fontFamily: theme.typography.fontFamilySecondary,
                lineHeight: "24px",
                textAlign: "justify",
                whiteSpace: "pre-line",
              }}
            >
              {description}
            </Typography>
            <Grid container mt={4}>
              {points.map((point) => (
                <Grid key={point} size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: "flex", pb: 1.5 }}>
                    <CheckIcon
                      sx={{
                        color: theme.palette.text.primary,
                        mt: { sm: 0.2 },
                        mr: { xs: 1.2, sm: 1 },
                      }}
                      fontSize="medium"
                    />
                    <Typography
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: { xs: "18.5px", sm: "18px", md: "20px" },
                        fontWeight: 500,
                        fontFamily: theme.typography.fontFamily,
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Image Section */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={imgSrc}
              alt="Image"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </>
  );
};

export default ServicesMainSection;

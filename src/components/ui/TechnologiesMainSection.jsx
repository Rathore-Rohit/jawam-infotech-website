import { Box, Typography, Grid } from "@mui/material";
import theme from "../../theme";

const TechnologiesMainSection = ({ heading, technologies }) => {
  return (
    <Box component="section" sx={{ px: { xs: 3, sm: 6, lg: 14 }, py: 12 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "28px", sm: "34px", md: "36px", lg: "38px" },
          fontFamily: theme.typography.fontFamily,
          fontWeight: 900,
          color: theme.palette.text.secondary,
          lineHeight: { xs: "36px", sm: "42px", md: "46px", lg: "48px" },
          px: { xs: 0.5, sm: 12, md: 26, lg: 46 },
        }}
      >
        Steps to Select Right Technology Stack
      </Typography>
      <Box component="div">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "500px",
              backgroundColor: theme.palette.text.primary,
              textAlign: "center",
              borderRadius: { xs: 14, sm: 8 },
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              py: 1,
              mt: 8,
              mb: 6,
            }}
          >
            <Typography
              sx={{
                color: theme.palette.custom.white,
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "26px", sm: "28px", md: "30px" },
                fontWeight: 900,
                lineHeight: "36px",
              }}
            >
              {heading}
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={5}>
          {technologies.map((item) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.heading}>
              <Box sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1.2,
                  }}
                >
                  <Box component="img" src={item.logoSrc} width={36} />
                  <Typography
                    sx={{
                      fontSize: "24px",
                      color: theme.palette.text.secondary,
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.custom.paragraph,
                    fontSize: "16px",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TechnologiesMainSection;

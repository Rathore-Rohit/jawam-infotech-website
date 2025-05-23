import { Box, Grid, Typography } from "@mui/material";
import theme from "../../theme";

const IndustriesMainSection = ({ heading, cardData }) => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8, lg: 12 }, py: 12 }}>
      <Typography
        component="h3"
        align="center"
        sx={{
          color: theme.palette.text.primary,
          fontFamily: theme.typography.fontFamily,
          fontSize: { xs: "25px", md: "27px" },
          fontWeight: 800,
          textTransform: "uppercase",
        }}
        gutterBottom
      >
        {heading}
      </Typography>

      <Grid
        container
        columnSpacing={{ xs: 3.5, md: 4, lg: 2 }}
        rowSpacing={{ xs: 7.5, md: 8.5, lg: 6.5 }}
        justifyContent="center"
        sx={{ mt: 8.5 }}
      >
        {cardData.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, lg: 3 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "90%",
                minHeight: 250,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                border: "0.8px solid rgb(222, 226, 230)",
                p: 2.5,
                backgroundColor: "#fff",
              }}
            >
              <Typography
                component="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: theme.typography.fontFamily,
                  lineHeight: "21px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.custom.paragraph,
                  fontSize: "14px",
                  fontWeight: 400,
                  fontFamily: theme.typography.fontFamilySecondary,
                  lineHeight: "22px",
                  mt: 1.2,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IndustriesMainSection;

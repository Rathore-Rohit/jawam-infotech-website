import React from "react";
import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Link as RouterLink } from "react-router-dom";
import theme from "../../theme";

const Banner = ({ title, subTitle, image, currentPage }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "550px",
        mt: { xs: "90px", md: 0 },
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(9, 30, 62, 0.7)",
          zIndex: 1,
        }}
      />

      {/* Content */}
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
          color: "#fff",
        }}
      >
        <Container>
          <Typography
            component="h1"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: { xs: "30px", sm: "44px", md: "51px", lg: "56px" },
              fontWeight: { xs: 500, sm: 900 },
              lineHeight: "36px",
              mt: { xs: 2, md: 4 },
            }}
          >
            {title}
          </Typography>

          {/* Breadcrumb */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: { xs: 1, sm: 1.5 },
              fontSize: { xs: "17px", sm: "20px" },
              mt: { xs: 1.5, sm: 2, md: 3 },
              fontFamily: theme.typography.fontFamily,
            }}
          >
            <MuiLink
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                fontWeight: 500,
                color: "#fff",
                "&:hover": { color: "#ddd" },
              }}
            >
              Home
            </MuiLink>

            <RadioButtonUncheckedIcon
              sx={{ fontSize: { xs: "17px", sm: "19px" } }}
            />

            <MuiLink
              component={RouterLink}
              to={`/${currentPage?.toLowerCase() || ""}`}
              underline="none"
              sx={{
                fontWeight: 500,
                color: "#fff",
                "&:hover": { color: "#ddd" },
              }}
            >
              {title}
            </MuiLink>
          </Box>

          {/* Sub Title */}
          <Typography
            component="h2"
            sx={{
              mt: 1.5,
              whiteSpace: "pre-line",
              fontSize: {
                xs: "24.08px",
                sm: "28px",
                md: "30.5px",
                lg: "32px",
              },
              fontFamily: theme.typography.fontFamily,
              fontWeight: { xs: 500, sm: 900 },
            }}
          >
            {subTitle}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;

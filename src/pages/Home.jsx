import React from "react";
import bannerImage from "../assets/bannerHome.jpeg";
import { Box, Container, Typography } from "@mui/material";
import theme from "../theme";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "550px",
          marginTop: {
            xs: "90px",
            md: 0,
          },
        }}
      >
        {/* Image as background */}
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

        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(9, 30, 62, 0.7)",
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
    </>
  );
};

export default Home;

import { useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import googleReviews from "../../assets/googleReviews.png";
import goodFirms from "../../assets/goodFirms.png";
import clutch from "../../assets/clutch.png";
import theme from "../../theme";
import Underline from "./Underline";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const platforms = [
    {
      name: "Google 5-star Review",
      logo: googleReviews,
      path: "https://g.co/kgs/tDRtyyD",
      logoWidth: "140px",
    },
    {
      name: "Good Firms 5-star Review",
      logo: goodFirms,
      path: "https://www.goodfirms.co/company/jawam-infotech",
      logoWidth: "190px",
    },
    {
      name: "Clutch 5-star Review",
      logo: clutch,
      path: "https://clutch.co/profile/jawam-infotech",
      logoWidth: "125px",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          color: theme.palette.text.secondary,
          fontSize: "20px",
          fontWeight: 600,
          fontFamily: theme.typography.fontFamily,
          textTransform: "uppercase",
        }}
      >
        Trusted by Clients 
      </Typography>

      <Underline
        lineWidth="140px"
        lineHeight="3px"
        barWidth="5px"
        mtop={1.5}
        mBottom={{ xs: 6, sm: 7 }}
      />

      {/* Reviews */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 5, sm: 6, md: 8, lg: 12, xl: 8 },
          flexWrap: "wrap",
        }}
        data-aos="fade-up"
      >
        {platforms.map((platform, index) => (
          <Link
            key={index}
            href={platform.path}
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
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#EEF9FF",
                borderRadius: 1,
                width: 280,
                height: 155,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#ff9900", fontSize: 26 }} />
                ))}
              </Box>
              <Box
                component="img"
                src={platform.logo}
                alt={platform.name}
                width={platform.logoWidth}
                sx={{ mt: 1 }}
              />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewsSection;

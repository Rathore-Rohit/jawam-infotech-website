import { useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Healthcare from "../../assets/healthcareHome.webp";
import Finance from "../../assets/financeHome.webp";
import Automotive from "../../assets/automotiveHome.webp";
import Insurance from "../../assets/insuranceHome.webp";
import Education from "../../assets/educationHome.webp";
import Logistics from "../../assets/logisticsHome.webp";
import Construction from "../../assets/constructionHome.webp";
import Retail from "../../assets/retailHome.webp";
import theme from "../../theme";
import Underline from "./Underline";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const cardStyles = (item) => ({
  position: "relative",
  width: "100%",
  height: item.tall ? 472 : 240,
  borderRadius: 4,
  backgroundImage: item.image ? `url(${item.image})` : "none",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "flex-end",
  p: 2,
  color: "white",
});

const Overlay = () => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to top, rgba(9, 30, 62, 0.7) 0%, rgba(9, 30, 62, 0.3) 60%, rgba(9, 30, 62, 0) 100%)",
      zIndex: 1,
      borderRadius: 4,
    }}
  />
);

const mobileRows = [
  // 2 cards
  [
    {
      label: "HEALTHCARE",
      icon: <LocalHospitalIcon sx={{ fontSize: 28 }} />,
      image: Healthcare,
      path: "healthcare",
    },
    {
      label: "FINANCE",
      icon: <AccountBalanceIcon sx={{ fontSize: 28 }} />,
      image: Finance,
      path: "finance",
    },
  ],
  // 1 card
  [
    {
      label: "RETAIL & E-COMMERCE",
      icon: <ShoppingCartIcon sx={{ fontSize: 28 }} />,
      image: Retail,
      path: "retail-ecommerce",
      tall: true,
    },
  ],
  // 2 cards
  [
    {
      label: "EDUCATION",
      icon: <MenuBookIcon sx={{ fontSize: 28 }} />,
      image: Education,
      path: "education",
    },
    {
      label: "INSURANCE",
      icon: <VerifiedUserIcon sx={{ fontSize: 28 }} />,
      image: Insurance,
      path: "insurance",
    },
  ],
  // 1 card
  [
    {
      label: "LOGISTICS & DISTRIBUTION",
      icon: <LocalShippingIcon sx={{ fontSize: 28 }} />,
      image: Logistics,
      path: "logistics-distribution",
      tall: true,
    },
  ],
  // 2 cards
  [
    {
      label: "AUTOMOTIVE",
      icon: <DirectionsCarIcon sx={{ fontSize: 28 }} />,
      image: Automotive,
      path: "automotive",
    },
    {
      label: "CONSTRUCTION",
      icon: <EngineeringIcon sx={{ fontSize: 28 }} />,
      image: Construction,
      path: "construction",
    },
  ],
];

const desktopData = [
  [
    {
      label: "HEALTHCARE",
      icon: <LocalHospitalIcon sx={{ fontSize: 28 }} />,
      image: Healthcare,
      path: "healthcare",
    },
    {
      label: "RETAIL & E-COMMERCE",
      icon: <ShoppingCartIcon sx={{ fontSize: 28 }} />,
      image: Retail,
      path: "retail-ecommerce",
    },
  ],
  [
    {
      label: "EDUCATION",
      icon: <MenuBookIcon sx={{ fontSize: 28 }} />,
      image: Education,
      path: "education",
      tall: true,
    },
  ],
  [
    {
      label: "INSURANCE",
      icon: <VerifiedUserIcon sx={{ fontSize: 28 }} />,
      image: Insurance,
      path: "insurance",
    },
    {
      label: "AUTOMOTIVE",
      icon: <DirectionsCarIcon sx={{ fontSize: 28 }} />,
      image: Automotive,
      path: "automotive",
    },
  ],
  [
    {
      label: "FINANCE",
      icon: <AccountBalanceIcon sx={{ fontSize: 28 }} />,
      image: Finance,
      path: "finance",
      tall: true,
    },
  ],
  [
    {
      label: "LOGISTICS & DISTRIBUTION",
      icon: <LocalShippingIcon sx={{ fontSize: 28 }} />,
      image: Logistics,
      path: "logistics-distribution",
    },
    {
      label: "CONSTRUCTION",
      icon: <EngineeringIcon sx={{ fontSize: 28 }} />,
      image: Construction,
      path: "construction",
    },
  ],
];

// Style
const styles = {
  commonBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: { xs: 1, sm: 12, md: 26, lg: 46 },
    gap: 1.5,
  },
  heading: {
    color: theme.palette.text.secondary,
    fontSize: "20px",
    fontWeight: 800,
    fontFamily: theme.typography.fontFamily,
    textTransform: "uppercase",
  },
};

const IndustriesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const themeMedia = useTheme();
  const isMobile = useMediaQuery(themeMedia.breakpoints.down("lg"));

  const navigate = useNavigate();

  const handleClick = (label) => {
    const route = `/industries/${label.toLowerCase().replace(/\s|&/g, "-")}`;
    navigate(route);
  };

  return (
    <Box sx={{ px: { xs: 3, sm: 6, lg: 8, xl: 0 }, pt: 12 }}>
      <Box sx={styles.commonBox}>
        <Typography component="h5" sx={styles.heading}>
          Industries We Serve
        </Typography>

        <Underline
          lineWidth="140px"
          lineHeight="4px"
          barWidth="5px"
          mBottom={{ xs: 6, sm: 7 }}
        />
      </Box>

      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2.5, sm: 3.5, md: 4.5, lg: 6 },
          }}
          data-aos="fade-up"
        >
          {mobileRows.map((row, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 3.5 },
                justifyContent: row.length === 1 ? "center" : "space-between",
                flexWrap: "nowrap",
              }}
            >
              {row.map((item, index) => (
                <Box
                  key={index}
                  onClick={() => handleClick(item.path)}
                  sx={{
                    flex: row.length === 1 ? "0 0 100%" : "0 0 48%",
                    height: item.tall ? (isMobile ? 240 : 472) : 240,
                    borderRadius: 4,
                    backgroundImage: item.image ? `url(${item.image})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-end",
                    p: 2,
                    color: "white",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(to top, rgba(9, 30, 62, 0.7) 0%, rgba(9, 30, 62, 0.3) 60%, rgba(9, 30, 62, 0) 100%)",
                      zIndex: 1,
                      borderRadius: 4,
                    }}
                  />
                  <Box sx={{ position: "absolute", zIndex: 2 }}>
                    {item.icon}
                    <Typography variant="subtitle1" fontWeight="600">
                      {item.label}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      ) : (
        // ... (desktop layout)
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: {xs: 3, xl: 4},
            justifyContent: "center",
          }}
          data-aos="fade-up"
        >
          {desktopData.map((column, colIndex) => (
            <Box
              key={colIndex}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: {xs: 3, xl: 4},
              }}
            >
              {column.map((item, i) => (
                <Box
                  key={i}
                  onClick={() => handleClick(item.path)}
                  sx={{
                    ...cardStyles(item),
                    width: {xs: 240, xl: 260},
                    mt: { lg: item.tall ? 2.5 : 0 },
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Overlay />
                  <Box sx={{ position: "absolute", zIndex: 2 }}>
                    {item.icon}
                    <Typography variant="subtitle1" fontWeight="600">
                      {item.label}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default IndustriesSection;

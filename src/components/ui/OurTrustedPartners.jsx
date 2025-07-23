import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import CodeCrux from "../../assets/CodeCrux.png";
import BacancyTechnology from "../../assets/BacancyTechnology.png";
import AppcuratorsLogo from "../../assets/AppcuratorsLogo.png";
import DevlabsallianceLogo from "../../assets/DevlabsallianceLogo.webp";
import FeedopsLogo from "../../assets/feedops-logo.png";
import InfinitiveLogo from "../../assets/Infinitive.png";
import PureTechnologyLogo from "../../assets/Pure_Technology_Logo.png";
import UpstackhqLogo from "../../assets/upstackhq_logo.png";
import HireRampLogo from "../../assets/HireRampLogo.png";

const logos = [
  BacancyTechnology,
  AppcuratorsLogo,
  DevlabsallianceLogo,
  UpstackhqLogo,
  CodeCrux,
  FeedopsLogo,
  InfinitiveLogo,
  PureTechnologyLogo,
  HireRampLogo,
];

const OurClients = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ overflow: "hidden", py: 5, bgcolor: "white" }}>
      <Marquee
        speed={60}         
        gradient={isMobile? false : true}  
        pauseOnHover={false} 
      >
        {logos.map((logo, index) => (
          <Box
            key={index}
            component="img"
            src={logo}
            alt={`client-logo-${index}`}
            sx={{ height: 58, width: "auto", mx: 6 }} 
          />
        ))}
      </Marquee>
    </Box>
  );
};

export default OurClients;

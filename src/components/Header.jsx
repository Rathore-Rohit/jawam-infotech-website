import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const StyledTypography = styled(Typography)({
  color: "rgb(238, 249, 255)",
  fontSize: "14px",
  fontWeight: 400,
  fontFamily: "Rubik, sans-serif",
  display: "flex",
  alignItems: "center",
  marginRight: "16px",
});

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(9, 30, 62)",
        px: 6,
        display: { xs: "none", md: "block" }, // Hide on small screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "45px",
        }}
      >
        <StyledTypography variant="body2">
          <PhoneIcon sx={{ mr: 1, fontSize: "18px" }} />
          +91 99814 67849
        </StyledTypography>
        <StyledTypography variant="body2" sx={{ marginRight: 0 }}>
          <EmailIcon sx={{ mr: 1, fontSize: "18px" }} />
          contact@jawaminfotech.com
        </StyledTypography>
      </Box>
    </Box>
  );
};

export default Header;

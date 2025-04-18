import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import theme from "../../theme";

const StyledTypography = styled(Typography)({
  color: theme.palette.custom.white,
  fontSize: "14px",
  fontWeight: 300,
  fontFamily: theme.typography.fontFamilySecondary,
  display: "flex",
  alignItems: "center",
  marginRight: "16px",
});

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
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
        <StyledTypography>
          <PhoneIcon sx={{ mr: 1, fontSize: "18px" }} />
          +91 99814 67849
        </StyledTypography>
        <StyledTypography sx={{ marginRight: 0 }}>
          <EmailIcon sx={{ mr: 1, fontSize: "18px" }} />
          contact@jawaminfotech.com
        </StyledTypography>
      </Box>
    </Box>
  );
};

export default Header;

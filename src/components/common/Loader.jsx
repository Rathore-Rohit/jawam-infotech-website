import { Box, keyframes } from "@mui/material";
import loaderImage from "../../assets/loader-logo.jpeg";
import theme from "../../theme";

// Flip animation
const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: theme.palette.custom.white,
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={loaderImage}
        width={80}
        sx={{
          animation: `${flipAnimation} 1s ease-in-out 1`,
        }}
      />
    </Box>
  );
};

export default Loader;


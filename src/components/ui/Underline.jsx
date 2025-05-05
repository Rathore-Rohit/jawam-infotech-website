import React from "react";
import { Box } from "@mui/material";

const Underline = ({ lineWidth, lineHeight, barWidth, mtop = 0, mBottom = 0 }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: lineWidth,
        height: lineHeight,
        backgroundColor: "#06A3DA",
        borderRadius: "10px",
        overflow: "hidden",
        mt: mtop,
        mb: mBottom,
      }}
    >
      {/* Moving bar */}
      <Box
        sx={{
          position: "absolute",
          width: barWidth,
          height: "100%",
          backgroundColor: "#fff",
          animation: "moveBar 2.5s linear infinite alternate",
          "@keyframes moveBar": {
            "0%": { left: "0%" },
            "100%": { left: `calc(100% - ${barWidth})` },
          },
        }}
      />
    </Box>
  );
};

export default Underline;

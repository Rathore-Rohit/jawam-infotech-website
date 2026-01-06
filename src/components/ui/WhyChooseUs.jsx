import { Box, Typography, Paper, useTheme } from "@mui/material";
import { Award, Wrench, Gem, Rocket } from "lucide-react";
import Underline from "../../components/ui/Underline";

const features = [
  {
    icon: <Award size={40} />,
    title: "Expertise",
    description:
      "Our experts bring deep knowledge and insights to deliver efficient and impactful solutions for your business needs.",
  },
  {
    icon: <Wrench size={40} />,
    title: "Custom Solutions",
    description:
      "We build tailored solutions designed to match your exact requirements and help achieve measurable business growth.",
  },
  {
    icon: <Gem size={40} />,
    title: "Quality Assurance",
    description:
      "Strict testing ensures every solution meets the highest standards of quality, performance, and reliability.",
  },
  {
    icon: <Rocket size={40} />,
    title: "Timely Delivery",
    description:
      "We ensure all projects are delivered on time with quality, giving your business a strong competitive advantage.",
  },
];

import { Crown, Lightbulb, Users, Headphones } from "lucide-react";

const features1 = [
  {
    icon: <Crown size={40} />,
    title: "Best In Industry",
    description:
      "Setting benchmarks with top-tier industry solutions, delivering excellence that defines us as the best in business.",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Innovation Hub",
    description:
      "Driving progress through creative, customer-focused solutions that redefine innovation in every project we handle.",
  },
  {
    icon: <Users size={40} />,
    title: "Professional Staff",
    description:
      "Empowering excellence with a team of dedicated and highly professional staff committed to your lasting success.",
  },
  {
    icon: <Headphones size={40} />,
    title: "24/7 Support",
    description:
      "Delivering round-the-clock support to ensure your business runs smoothly without boundaries or interruptions.",
  },
];

const WhyChooseUs = () => {
  const theme = useTheme();

  return (
    <>
      {/* Why Choose Us?  */}
      <Box
        sx={{
          backgroundColor: "#E5F6FD",
          py: 8,
          px: { xs: 3, sm: 6, lg: 8, xl: 12 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight="500" align="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              mb: 2,
              color: theme.palette.custom.paragraph,
              fontFamily: theme.typography.fontFamilySecondary,
            }}
          >
            Discover the advantages of partnering with Jawam Infotech for your
            next project
          </Typography>
          <Underline
            lineWidth="140px"
            lineHeight="3px"
            barWidth="5px"
            mBottom={{ xs: 6, sm: 7 }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gap: 5,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
          }}
        >
          {features.map((item, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                px: { xs: 4, sm: 3.5, md: 4 },
                py: 4,
                textAlign: "center",
                border: "1px solid transparent",
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: theme.palette.text.primary,
                  boxShadow: "0 10px 25px rgba(0, 188, 212, 0.1)",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography variant="h6" fontWeight="500" gutterBottom>
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: theme.palette.custom.paragraph,
                  fontFamily: theme.typography.fontFamilySecondary,
                  lineHeight: "24px",
                }}
              >
                {item.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Our Commitment to Excellence*/}
      <Box sx={{ py: 8, px: { xs: 3, sm: 6, lg: 8, xl: 12 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight="500" align="center" gutterBottom>
            Our Commitment to Excellence
          </Typography>
          <Typography
            align="center"
            sx={{
              mb: 2,
              color: theme.palette.custom.paragraph,
              fontFamily: theme.typography.fontFamilySecondary,
            }}
          >
            We are dedicated to providing top-tier service and groundbreaking
            solutions
          </Typography>
          <Underline
            lineWidth="140px"
            lineHeight="3px"
            barWidth="5px"
            mBottom={{ xs: 6, sm: 7 }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            gap: 5,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
          }}
        >
          {features1.map((item, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                px: { xs: 4, sm: 3.5, md: 4 },
                py: 4,
                textAlign: "center",
                border: "1px solid transparent",
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: theme.palette.text.primary,
                  boxShadow: "0 10px 25px rgba(0, 188, 212, 0.1)",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography variant="h6" fontWeight="500" gutterBottom>
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: theme.palette.custom.paragraph,
                  fontFamily: theme.typography.fontFamilySecondary,
                  lineHeight: "24px",
                }}
              >
                {item.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default WhyChooseUs;

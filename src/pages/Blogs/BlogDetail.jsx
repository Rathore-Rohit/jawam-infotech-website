import {
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "./blogData";
import theme from "../../theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h5" textAlign="center">
          Blog not found
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#f8f9fb", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">

        {/* Article Card */}
        <Box
          sx={{
            backgroundColor: "#fff",
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
          }}
        >
          <Box
  onClick={() => navigate(-1)}
  sx={{
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    mb: 3,
    cursor: "pointer",
    color: theme.palette.custom.paragraph,
    transition: "all 0.2s ease",
    "&:hover": {
      color: theme.palette.text.secondary,
      transform: "translateX(-4px)",
    },
  }}
>
  <ArrowBackIcon fontSize="small" />
  <Typography variant="body2" fontWeight={500}>
    Back
  </Typography>
</Box>
          {/* Title */}
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ mb: 2, color: theme.palette.text.secondary }}
          >
            {blog.title}
          </Typography>

          {/* Meta */}
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.custom.paragraph,
              mb: 4,
              fontSize: "0.9rem",
            }}
          >
            {blog.author} • {blog.date}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          {/* Image */}
          <Box
            component="img"
            src={blog.image}
            alt={blog.title}
            sx={{
              width: "100%",
              borderRadius: 3,
              mb: 5,
            }}
          />

          {/* Content Renderer */}
          <Box>
            {blog.content.split("\n").map((line, index) => {
              const trimmed = line.trim();
              if (!trimmed) return null;

              // Main Headings
              if (
                trimmed === "Introduction" ||
                trimmed === "Conclusion" ||
                trimmed.includes("Top 5") ||
                trimmed.includes("Why") ||
                trimmed.includes("Services") ||
                trimmed.includes("Use Cases")
              ) {
                return (
                  <Typography
                    key={index}
                    variant="h5"
                    sx={{
                      mt: 5,
                      mb: 2,
                      fontWeight: 700,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {trimmed}
                  </Typography>
                );
              }

              // Numbered Headings
              if (/^\d+\./.test(trimmed)) {
                return (
                  <Typography
                    key={index}
                    variant="h6"
                    sx={{
                      mt: 3,
                      mb: 1,
                      fontWeight: 600,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {trimmed}
                  </Typography>
                );
              }

              // Bullet Points
              if (trimmed.startsWith("•")) {
                return (
                  <Typography
                    key={index}
                    sx={{
                      ml: 2,
                      mb: 1,
                      color: theme.palette.custom.paragraph,
                    }}
                  >
                    {trimmed}
                  </Typography>
                );
              }

              // Normal Paragraph
              return (
                <Typography
                  key={index}
                  sx={{
                    mb: 2,
                    lineHeight: 1.9,
                    fontSize: "1.05rem",
                    color: theme.palette.custom.paragraph,
                  }}
                >
                  {trimmed}
                </Typography>
              );
            })}
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default BlogDetail;
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";
import Banner from "../../components/common/Banner";
import bannerImage from "../../assets/blogs-banner.jpg";
import { Link } from "react-router-dom";
import { blogData } from "./blogData";
import theme from "../../theme";

const BlogsHome = () => {
  return (
    <>
      <Banner
        title="Insights & Innovations"
        subTitle={`Explore technology trends, digital solutions, and\n success stories from Jawam Infotech.`}
        image={bannerImage}
        currentPage="blogs"
      />

{/* Blog Cards Section */}
<Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f9fafc" }}>
  <Container maxWidth="lg">
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",          // Mobile = 1 card
          sm: "repeat(2, 1fr)" // Tablet+Desktop = 2 cards
        },
        gap: 4,
      }}
    >
      {blogData.map((blog, index) => (
        <Card
          key={index}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
            },
          }}
        >
          <CardMedia
            component="img"
            image={blog.image}
            alt={blog.title}
            sx={{
              height: 240,
              objectFit: "cover",
            }}
          />

          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: theme.palette.text.primary }}>
                {blog.title}
              </Typography>

              <Typography variant="body2" sx={{ color: theme.palette.custom.paragraph } }>
                {blog.excerpt}
              </Typography>
            </Box>

            <Button
  component={Link}
  to={`/blogs/${blog.slug}`}
  variant="text"
  sx={{ mt: 2, textTransform: "none", fontWeight: 600, color: theme.palette.text.secondary }}
>
  Read More →
</Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Container>
</Box>
    </>
  );
};

export default BlogsHome;

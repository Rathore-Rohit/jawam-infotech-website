import Banner from "../../components/common/Banner";
import bannerImage from "../../assets/work-with-us.jpg";
import {
    Box,
    Container,
    Card,
    CardContent,
    Typography,
    Button,
} from "@mui/material";
import { Briefcase, Handshake, TrendingUp } from "lucide-react";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

const WorkWithUs = () => {
    const navigate = useNavigate();
    const services = [
        {
            icon: <Briefcase size={32} />,
            title: "Potential Client",
            description:
                "Looking to build a product or need development services?",
            buttonText: "Start Your Project",
            path: "/project-inquiry",
        },
        {
            icon: <Handshake size={32} />,
            title: "Potential Partner",
            description:
                "Have complementary services? Let’s explore collaboration.",
            buttonText: "Explore Partnership",
            path: "/potential-partner",
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Service Provider",
            description:
                "Offer tools or services that can support our team?",
            buttonText: "Submit Proposal",
            path: "/vendor-form",
        },
    ];
    return (
        <>
            <Banner
                title="Work With Us"
                subTitle={`Let’s build innovative digital solutions together`}
                image={bannerImage}
                currentPage="work-with-us"
            />


            <Box sx={{ py: 8, backgroundColor: "#f5f7fa" }}>
                <Container maxWidth="lg">

                    {/* Section Heading */}
                    <Typography
                        variant="h4"
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: "20px",
                            fontWeight: 600,
                            fontFamily: theme.typography.fontFamily,
                            textTransform: "uppercase",
                            textAlign: "center",
                            mb: 4
                        }}
                    >
                        Let’s Work Together
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",        // Mobile → 1 column
                                md: "repeat(3, 1fr)", // Desktop → 3 columns
                            },
                            gap: 4,
                            pt: 4,
                        }}
                    >
                        {services.map((item, index) => (
                            <Card
                                key={index}
                                sx={{
                                    textAlign: "center",
                                    p: 3,
                                    borderRadius: 2,
                                    boxShadow: "rgba(7, 16, 63, 0.06) 0px 0px 16px 0px",
                                }}
                                elevation={3}
                            >
                                <CardContent>
                                    {/* Icon Circle */}
                                    <Box
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: "50%",
                                            background: theme.palette.text.primary,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto 20px",
                                            color: "#fff",
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {item.title}
                                    </Typography>

                                    <Typography variant="body2" mb={2} sx={{ color: theme.palette.custom.paragraph }}>
                                        {item.description}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        onClick={() => navigate(item.path)}
                                        sx={{
                                            mt: 1,
                                            background: theme.palette.text.primary,
                                            borderRadius: 2,
                                            textTransform: "none",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item.buttonText}
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

export default WorkWithUs;

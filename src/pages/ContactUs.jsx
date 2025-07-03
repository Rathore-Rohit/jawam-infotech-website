import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Autocomplete,
  Stack,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import bannerImage from "../assets/bannerContact.webp";
import Banner from "../components/common/Banner";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import Underline from "../components/ui/Underline";
import theme from "../theme";

const textFieldStyle = {
  "& .MuiFilledInput-root": {
    backgroundColor: "#EEF9FF",
    "&:hover": {
      backgroundColor: "#EEF9FF",
    },
    "&.Mui-focused": {
      backgroundColor: "#EEF9FF",
    },
  },
  "& .MuiFormLabel-root": {
    color: "#6B6A75",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#83d1ed",
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#83d1ed",
  },
  width: { xs: "100%", sm: "50%" },
};

const options = [
  "LinkedIn",
  "Instagram",
  "Facebook",
  "Twitter",
  "Other Plateform",
];

const ContactUs = () => {
  const [source, setSource] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "contactNumber" ? value.replace(/[^0-9]/g, "") : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new FormData();
    formBody.append("firstName", formData.firstName);
    formBody.append("lastName", formData.lastName);
    formBody.append("email", formData.email);
    formBody.append("contactNumber", formData.contactNumber);
    formBody.append("heardFrom", source);
    formBody.append("_captcha", "false");

    try {
      await fetch("https://formsubmit.co/enquiry@jawaminfotech.com", {
        method: "POST",
        body: formBody,
      });

      // Show popup
      setOpen(true);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
      });
      setSource("");
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Contact Us"
        subTitle={`We Jawam Infotech are here to help!\nWe're friendly and available to chat. Reach out to us\nanytime and we'll happily answer your questions`}
        image={bannerImage}
        currentPage="contact"
      />

      {/* Let's Start a Conversation Section */}
      <Box component="section" sx={{ px: { xs: 3, sm: 6, lg: 12 }, pt: 12 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "20px",
              color: theme.palette.text.secondary,
            }}
          >
            Let's Start a Conversation!
          </Typography>
          <Underline
            lineWidth="140px"
            lineHeight="4px"
            barWidth="5px"
            mtop={1}
            mBottom={{ xs: 6, sm: 8 }}
          />
        </Box>
        <Grid container spacing={6}>
          {/* Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: { md: 4, lg: 2.5 } }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 2 }}
              >
                <TextField
                  type="text"
                  name="firstName"
                  label="First Name"
                  variant="filled"
                  sx={{
                    ...textFieldStyle,
                    "& .MuiFormLabel-asterisk": {
                      display: "none",
                    },
                  }}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <TextField
                  type="text"
                  name="lastName"
                  label="Last Name"
                  variant="filled"
                  sx={{
                    ...textFieldStyle,
                    "& .MuiFormLabel-asterisk": {
                      display: "none",
                    },
                  }}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 2 }}
              >
                <TextField
                  type="email"
                  name="email"
                  label="Bussiness Email"
                  variant="filled"
                  sx={{
                    ...textFieldStyle,
                    "& .MuiFormLabel-asterisk": {
                      display: "none",
                    },
                  }}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  type="tel"
                  name="contactNumber"
                  label="Contact Number"
                  variant="filled"
                  sx={{
                    ...textFieldStyle,
                    "& .MuiFormLabel-asterisk": {
                      display: "none",
                    },
                  }}
                  inputProps={{
                    maxLength: 10,
                  }}
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </Stack>
              <Autocomplete
                options={options}
                value={source}
                onChange={(e, value) => setSource(value)}
                onInputChange={(e, value) => setSource(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="How did you hear about us"
                    variant="filled"
                    fullWidth
                    required
                    sx={{
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#EEF9FF",
                        "&:hover": {
                          backgroundColor: "#EEF9FF",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "#EEF9FF",
                        },
                      },
                      "& .MuiFormLabel-root": {
                        color: "#6B6A75",
                      },
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#83d1ed",
                      },
                      "& .MuiFilledInput-underline:after": {
                        borderBottomColor: "#83d1ed",
                      },

                      "& .MuiFormLabel-asterisk": {
                        display: "none",
                      },
                    }}
                  />
                )}
                sx={{ mb: 2 }}
              />
              <Button
                fullWidth
                type="submit"
                sx={{
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.custom.white,
                  p: 2,
                  borderRadius: "2px",
                }}
              >
                Submit
              </Button>
            </Box>
            {/* Success Popup */}
            <Snackbar
              open={open}
              autoHideDuration={4000}
              onClose={() => setOpen(false)}
            >
              <Alert
                onClose={() => setOpen(false)}
                severity="success"
                sx={{
                  width: "100%",
                  fontFamily: theme.typography.fontFamilySecondary,
                }}
              >
                Thank you! Your response has been recorded.
              </Alert>
            </Snackbar>
          </Grid>

          {/* Company Contact Details Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="div">
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2 }}
              >
                <LocationOnIcon
                  sx={{ color: theme.palette.text.primary, fontSize: 46 }}
                />
                <Stack direction="column">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 500,
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                    }}
                  >
                    Corporate Office
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: "20px",
                      fontWeight: 500,
                      fontFamily: theme.typography.fontFamily,
                      lineHeight: 1.2,
                    }}
                  >
                    Plot No. 196, PU-4, 3rd Floor, Behind Malhar Mega Mall,
                    Scheme No. 54, Vijay Nagar, Indore – 452010, Madhya Pradesh,
                    India
                  </Typography>
                </Stack>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2 }}
              >
                <PhoneEnabledIcon
                  sx={{ color: theme.palette.text.primary, fontSize: 46 }}
                />
                <Stack direction="column">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 500,
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                    }}
                  >
                    Direct Contact
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: "20px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 500,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      gap={{ sm: 1 }}
                    >
                      Mobile:
                      <span
                        style={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        +91 99814 67849
                      </span>
                    </Stack>
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: "20px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 500,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      gap={{ sm: 1 }}
                    >
                      Email:
                      <span
                        style={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          wordBreak: "break-word",
                          lineHeight: 1.2,
                        }}
                      >
                        contact@jawaminfotech.com
                      </span>
                    </Stack>
                  </Typography>
                </Stack>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2 }}
              >
                <VoicemailIcon
                  sx={{ color: theme.palette.text.primary, fontSize: 46 }}
                />
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 500,
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                    }}
                  >
                    Departments
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 500,
                      color: theme.palette.text.primary,
                      wordBreak: "break-word",
                      lineHeight: 1.2,
                    }}
                  >
                    sales@jawaminfotech.com
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Map */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 350, sm: 300, md: 350 },
          px: { xs: 3, sm: 6, lg: 13 },
          mt: { xs: 5, md: 12 },
          mb: 12,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3258706020683!2d75.89112127513222!3d22.75328477936358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963031386a3f963%3A0xe9e34dddfa31ab0d!2sJawam%20Infotech!5e0!3m2!1sen!2sin!4v1729927357948!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </>
  );
};

export default ContactUs;

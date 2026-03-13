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
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    borderRadius: "8px",

    "& fieldset": {
      borderColor: "#E0E0E0", // normal border
    },

    "&:hover fieldset": {
      borderColor: theme.palette.text.primary, // hover blue
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.text.primary, // focus blue
      borderWidth: "1px",
    },
  },

  "& .MuiInputLabel-root": {
    color: theme.palette.custom.paragraph,
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.text.primary, // floating label blue
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
    message: "",
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
    formBody.append("message", formData.message);
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
        message: "",
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
      <Box component="section" sx={{ px: { xs: 1, sm: 5, md: 4, lg: 6 }, pt: { xs: 8, sm: 12 }, mb: { xs: 8, sm: 12 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 15px 45px rgba(0,0,0,0.08)",
          }}
        >
          {/* Form */}
          <Box
            sx={{
              p: { xs: 2, sm: 4, lg: 4 },
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 600,
                mb: 1,
                color: theme.palette.text.primary,
              }}
            >
              Let's Connect
            </Typography>

            <Typography
              sx={{
                color: "#777",
                mb: 3,
              }}
            >
              We're here to answer your questions and explore new opportunities.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: 2,
                p: { xs: 2, sm: 3 },
                borderRadius: "12px",
                boxShadow: "0 15px 45px rgba(0,0,0,0.08)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  mb: 4,
                  color: theme.palette.text.primary,
                }}
              >
                Send Us a Message
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 2 }}
              >
                <TextField
                  type="text"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        borderRadius: "8px",

                        "& fieldset": {
                          borderColor: "#E0E0E0",
                        },

                        "&:hover fieldset": {
                          borderColor: theme.palette.text.primary,
                        },

                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.text.primary,
                          borderWidth: "1px",
                        },
                      },

                      "& .MuiInputLabel-root": {
                        color: theme.palette.custom.paragraph,
                      },

                      "& .MuiInputLabel-root.Mui-focused": {
                        color: theme.palette.text.primary,
                      },

                      "& .MuiFormLabel-asterisk": {
                        display: "none",
                      },
                    }}
                  />
                )}
                sx={{ mb: 2 }}
              />
              <TextField
                name="message"
                label="Additional Message (Optional)"
                variant="outlined"
                multiline
                rows={3}
                fullWidth
                value={formData.message}
                onChange={handleChange}
                sx={{
                  ...textFieldStyle,
                  width: "100%",
                  mb: 2,
                  "& .MuiFormLabel-asterisk": {
                    display: "none",
                  },
                }}
              />
              <Button
                fullWidth
                type="submit"
                sx={{
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.custom.white,
                  p: 2,
                  borderRadius: "8px",
                  fontSize: "15px"
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
          </Box>

          {/* Company Contact Details Section */}
          <Box
            sx={{
              p: { xs: 2, sm: 4, lg: 4 },
              borderLeft: { md: "1px solid #eee" },
              background: "#fff",
            }}
          >
            <Box component="div">
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}
              >
                <LocationOnIcon
                  sx={{ color: theme.palette.text.primary, fontSize: 36 }}
                />
                <Stack direction="column">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 400,
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                    }}
                  >
                    Corporate Office
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: "17px",
                      fontWeight: 400,
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
                sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}
              >
                <PhoneEnabledIcon
                  sx={{ color: theme.palette.text.primary, fontSize: 36 }}
                />
                <Stack direction="column">
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 400,
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                    }}
                  >
                    Direct Contact
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: "17px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 400,
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
                          fontWeight: 400,
                        }}
                      >
                        +91 99814 67849
                      </span>
                    </Stack>
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontSize: "17px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 400,
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
                          fontWeight: 400,
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
                sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}
              >
                <VoicemailIcon
                  sx={{ color: theme.palette.text.primary, fontSize: 36 }}
                />
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 400,
                      color: theme.palette.text.secondary,
                      mb: 0.5,
                    }}
                  >
                    Departments
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 400,
                      color: theme.palette.text.primary,
                      wordBreak: "break-word",
                      lineHeight: 1.2,
                    }}
                  >
                    sales@jawaminfotech.com
                  </Typography>
                </Stack>
              </Box>
              {/* Map here */}
              <Box
                sx={{
                  width: "100%",
                  height: 220,
                  mt: 6,
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3258706020683!2d75.89112127513222!3d22.75328477936358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963031386a3f963%3A0xe9e34dddfa31ab0d!2sJawam%20Infotech!5e0!3m2!1sen!2sin!4v1729927357948!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ContactUs;

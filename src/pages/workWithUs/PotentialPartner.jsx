import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import theme from "../../theme";

const PotentialPartner = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_0g1r53f",
        "template_lky777h",
        {
          full_name: data.fullName,
          company_name: data.companyName,
          company_website: data.website,
          email: data.email,
          partnership_type: data.partnership,
          collaboration: data.collaboration,
          portfolio_link: data.portfolio,
        },
        "nDxkOkFleYvKu_PPa"
      )
      .then(() => setSubmitted(true))
      .catch((err) => console.log(err));
  };

  const filledStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      backgroundColor: "#fff",

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

    "& .MuiFormLabel-asterisk": {
      display: "none",
    },
  };

  return (
    <Box sx={{ padding: "60px 20px", maxWidth: "900px", margin: "auto" }}>
      {!submitted ? (
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            p: 4,
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h4" mb={4} sx={{ fontSize: { xs: "22px", sm: "28px", md: "30px", lg: "32px" } }}>
            Partnership Inquiry Form
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Full Name *"
              variant="outlined"
              fullWidth
              {...register("fullName", { required: true })}
              error={!!errors.fullName}
              sx={filledStyle}
            />

            <TextField
              label="Company Name *"
              variant="outlined"
              fullWidth
              {...register("companyName", { required: true })}
              error={!!errors.companyName}
              sx={filledStyle}
            />

            <TextField
              label="Company Website"
              variant="outlined"
              fullWidth
              {...register("website")}
              sx={filledStyle}
            />

            <TextField
              label="Email *"
              type="email"
              variant="outlined"
              fullWidth
              {...register("email", { required: true })}
              error={!!errors.email}
              sx={filledStyle}
            />

            <TextField
              select
              label="Type of Partnership"
              variant="outlined"
              fullWidth
              {...register("partnership")}
              sx={filledStyle}
            >
              <MenuItem value="Tech Partner">Tech Partner</MenuItem>
              <MenuItem value="Marketing Partner">Marketing Partner</MenuItem>
              <MenuItem value="Reseller">Reseller</MenuItem>
              <MenuItem value="Investment">Investment</MenuItem>
            </TextField>

            <TextField
              label="How can we collaborate?"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              {...register("collaboration")}
              sx={filledStyle}
            />

            <TextField
              label="Portfolio / Deck Link"
              type="url"
              placeholder="https://drive.google.com/..."
              variant="outlined"
              fullWidth
              {...register("portfolio")}
              sx={filledStyle}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: theme.palette.text.primary,
                color: theme.palette.custom.white,
                borderRadius: "8px",
                padding: "12px",
                fontSize: "16px",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      ) : (
        <Typography variant="h5">
          Thank you! We’ll review your partnership request and get back to you soon.
        </Typography>
      )}
    </Box>
  );
};

export default PotentialPartner;
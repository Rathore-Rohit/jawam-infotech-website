import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import theme from "../../theme";

const ProjectInquiry = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_0g1r53f",
        "template_a55fodd",
        {
          full_name: data.fullName,
          company_name: data.companyName,
          work_email: data.email,
          phone: data.phone,
          country: data.country,
          service: data.service,
          budget: data.budget,
          timeline: data.timeline,
          description: data.description,
          existing: data.existing,
        },
        "nDxkOkFleYvKu_PPa"
      )
      .then(() => setSubmitted(true))
      .catch((error) => console.log(error));
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
            p: { xs: 3, sm: 4 },
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h4" mb={4} sx={{ fontSize: { xs: "22px", sm: "28px", md: "30px", lg: "32px" } }}>
            Client Project Inquiry Form
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
              label="Company Name"
              variant="outlined"
              fullWidth
              {...register("companyName")}
              sx={filledStyle}
            />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Work Email *"
                variant="outlined"
                fullWidth
                {...register("email", { required: true })}
                error={!!errors.email}
                sx={filledStyle}
              />

              <TextField
                label="Phone Number *"
                variant="outlined"
                fullWidth
                {...register("phone", { required: true })}
                error={!!errors.phone}
                sx={filledStyle}
              />
            </Stack>

            <TextField
              label="Country / Location"
              variant="outlined"
              fullWidth
              {...register("country")}
              sx={filledStyle}
            />

            <TextField
              select
              label="What service are you looking for?"
              variant="outlined"
              fullWidth
              {...register("service")}
              sx={filledStyle}
            >
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="Mobile App">Mobile App</MenuItem>
              <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
              <MenuItem value="AI/ML">AI/ML</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                select
                label="Project Budget"
                variant="outlined"
                fullWidth
                {...register("budget")}
                sx={filledStyle}
              >
                <MenuItem value="<50K">&lt; 50K</MenuItem>
                <MenuItem value="50K–2L">50K–2L</MenuItem>
                <MenuItem value="2L–5L">2L–5L</MenuItem>
                <MenuItem value="5L+">5L+</MenuItem>
              </TextField>

              <TextField
                select
                label="Project Timeline"
                variant="outlined"
                fullWidth
                {...register("timeline")}
                sx={filledStyle}
              >
                <MenuItem value="Urgent (1 Month)">Urgent (1 Month)</MenuItem>
                <MenuItem value="2–3 Months">2–3 Months</MenuItem>
                <MenuItem value="3–6 Months">3–6 Months</MenuItem>
              </TextField>
            </Stack>

            <TextField
              label="Project Description *"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              {...register("description", { required: true })}
              error={!!errors.description}
              sx={filledStyle}
            />

            <FormControl>
              <Typography mb={1}>
                Do you have existing website/app?
              </Typography>

              <Controller
                name="existing"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <RadioGroup row {...field}>
                    <FormControlLabel
                      value="Yes"
                      control={
                        <Radio
                          sx={{
                            color: theme.palette.text.primary,
                            "&.Mui-checked": {
                              color: theme.palette.text.primary,
                            },
                          }}
                        />
                      }
                      label="Yes"
                    />

                    <FormControlLabel
                      value="No"
                      control={
                        <Radio
                          sx={{
                            color: theme.palette.text.primary,
                            "&.Mui-checked": {
                              color: theme.palette.text.primary,
                            },
                          }}
                        />
                      }
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>

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
        <>
          <Typography variant="h4" mb={3}>
            Thank you! Let’s schedule a discovery call.
          </Typography>

          <iframe
            src="https://calendly.com/shainkigupta?hide_event_type_details=1"
            width="100%"
            height="700"
            frameBorder="0"
            title="Calendly Booking"
          />
        </>
      )}
    </Box>
  );
};

export default ProjectInquiry;
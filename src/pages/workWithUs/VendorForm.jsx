import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import theme from "../../theme";

const VendorForm = () => {
  const [loading, setLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      company: "",
      service_category: "",
      email: "",
      phone: "",
      portfolio: "",
      clients: "",
      reason: "",
      attachment: null,
    },
  });

  const onSubmit = async (data) => {
    console.log("Vendor Data:", data);

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("Name", data.name || "");
      formData.append("Company", data.company || "");
      formData.append("Service Category", data.service_category || "");
      formData.append("Email", data.email || "");
      formData.append("Phone", data.phone || "");
      formData.append("Portfolio", data.portfolio || "");
      formData.append("Clients", data.clients || "");
      formData.append("Reason", data.reason || "");

      // FIXED FILE APPEND
      if (data.attachment) {
        formData.append("attachment", data.attachment);
      }

      const response = await fetch(
        "https://vendor-form-api.infotechjawam.workers.dev",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Form submitted successfully!",
          severity: "success",
        });

        reset();
        setSelectedFileName("");
      } else {
        setSnackbar({
          open: true,
          message: "Submission failed.",
          severity: "error",
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Network error. Please try again.",
        severity: "error",
      });
    }

    setLoading(false);
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
          Service Provider Proposal Form
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Name *"
            variant="outlined"
            fullWidth
            {...register("name", { required: true })}
            error={!!errors.name}
            sx={filledStyle}
          />

          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            {...register("company")}
            sx={filledStyle}
          />

          <Controller
            name="service_category"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Service Category"
                variant="outlined"
                fullWidth
                sx={filledStyle}
              >
                <MenuItem value="">Select Category</MenuItem>
                <MenuItem value="Development">Development</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Consulting">Consulting</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            )}
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
            label="Phone"
            variant="outlined"
            fullWidth
            {...register("phone")}
            sx={filledStyle}
          />

          <TextField
            label="Portfolio / Website"
            type="url"
            variant="outlined"
            fullWidth
            {...register("portfolio")}
            sx={filledStyle}
          />

          <TextField
            label="Past Client List"
            variant="outlined"
            fullWidth
            {...register("clients")}
            sx={filledStyle}
          />

          <TextField
            label="Why should we work with you?"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            {...register("reason")}
            sx={filledStyle}
          />

          {/* FIXED FILE CONTROLLER */}
          <Controller
            name="attachment"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <>
                <Button variant="outlined" component="label" TouchRippleProps={{ sx: { color: theme.palette.text.primary } }} sx={{
                  color: theme.palette.custom.paragraph,
                  textTransform: "none",
                  minWidth: "auto",
                  p: 1,
                  fontWeight: 400,
                  borderColor: "#E0E0E0", // normal border
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  "&:hover": {
                    borderColor: theme.palette.text.primary, // hover blue
                    backgroundColor: "#fff", // background stay white
                  },
                  "&.Mui-focused": {
                    borderColor: theme.palette.text.primary, // focus blue
                  },
                }}>
                  Upload Brochure
                  <input
                    type="file"
                    hidden
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setSelectedFileName(file.name);
                        field.onChange(file); // store single File object
                      }
                    }}
                  />
                </Button>

                {selectedFileName && (
                  <Typography variant="body2" color="success.main">
                    Attached: {selectedFileName}
                  </Typography>
                )}
              </>
            )}
          />

          <Button
            type="submit"
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              backgroundColor: theme.palette.text.primary,
              color: "#fff",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default VendorForm;
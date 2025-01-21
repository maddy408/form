import React, { useState } from "react";
import bgImageDesktop from "../assets/bg-sidebar-desktop.svg"; 
import bgImageMobile from "../assets/bg-sidebar-mobile.svg"; 
import { Box, TextField, Button, Typography, Stepper, Step, StepLabel } from "@mui/material";
import { useMediaQuery } from '@mui/material';

const PersonalInfoForm = ({ handleNext }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ email: false, phone: false });
  const [activeStep, setActiveStep] = useState(0); 

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: false, phone: false };

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
      valid = false;
    }

    if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
      newErrors.phone = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleNext();
      setActiveStep((prevStep) => prevStep + 1); 
    }
  };

  
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        margin: "0 auto",
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      {/* sidebar */}
      <Box
        sx={{
          width: { xs: "100%", md: 300 },
          height: { xs: 250, md: "100vh" },
          marginTop: { xs: 0, md: 5, },
          backgroundImage: {
            xs: `url(${bgImageMobile})`,
            md: `url(${bgImageDesktop})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: { xs: 0, md: 6 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        
      </Box>

      {/* Form */}
      <Box
        sx={{
          marginTop: { xs: 0, md: 5, },
          flex: 1,
          p: { xs: 2, md: 4 },
          maxWidth: { xs: "100%", md: 700 },
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          borderRadius: { xs: 0, md: 4 },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 3, md: 5 },
            width: "100%",
            backgroundColor: { xs: "transparent", md: "transparent" },
            borderRadius: { xs: 2, md: 0 },
            boxShadow: { xs: "none", md: "none" },
          }}
        >
          <Typography variant="h4" gutterBottom>
            <b>Personal Information</b>
          </Typography>
          <Typography variant="body1">
            Please provide your details to proceed to the next step.
          </Typography>
        </Box>

        {/* Fields */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 450,
            mt: 3,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email ? "Please enter a valid email address." : ""}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            helperText={errors.phone ? "This field is required (e.g., +1234567890)." : ""}
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            size="medium"
            sx={{
              ml:30,
         marginLeft: { xs: 25, md: 40, },
            mt: 10,
              borderRadius: 1,
              width: "40%",
            }}
            onClick={handleSubmit}
          >
            <b>Next Step</b>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalInfoForm;





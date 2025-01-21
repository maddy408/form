
import React, { useState } from "react";
import bgImageDesktop from "../assets/bg-sidebar-desktop.svg"; 
import bgImageMobile from "../assets/bg-sidebar-mobile.svg"; 
import {
  Box,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const addOns = [
  { id: 1, name: "Online Service", description: "Access to multiplayer games", price: "+$1/mo" },
  { id: 2, name: "Larger Storage", description: "Extra 1TB of cloud save", price: "+$2/mo" },
  { id: 3, name: "Customizable Profile", description: "Custom theme on your profile", price: "+$2/mo" },
];

const AddOns = ({ handleNext, handleBack }) => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleToggle = (id) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((addOn) => addOn !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (selectedAddOns.length === 0) {
      alert("Please select at least one add-on before proceeding.");
    } else {
      console.log("Selected Add-Ons:", selectedAddOns); 
      handleNext();
    }
  };

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
    
      <Box
        sx={{
          width: { xs: "100%", md: 300 },
          height: { xs: 250, md: "90vh" },
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

      
      <Box
       sx={{
        marginTop: { xs: 0, md: 5, },
        flex: 1,
        p: { xs: 1, md: 4 },
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
        <Typography variant="h4" gutterBottom>
          Pick Add-Ons
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ mb: 3, textAlign: "center" }}
        >
          Add-ons help enhance your gaming experience.
        </Typography>
        {addOns.map((addOn) => (
          <Box
            key={addOn.id}
            sx={{
              width: "100%",
              maxWidth: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              mb: 2,
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              boxShadow: selectedAddOns.includes(addOn.id)
                ? "0 0 10px rgba(0, 123, 255, 0.4)"
                : "none",
              backgroundColor: selectedAddOns.includes(addOn.id)
                ? "#f0f9ff"
                : "#ffffff",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedAddOns.includes(addOn.id)}
                  onChange={() => handleToggle(addOn.id)}
                />
              }
              label={
                <Box>
                  <Typography variant="subtitle1">
                    <b>{addOn.name}</b>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {addOn.description}
                  </Typography>
                </Box>
              }
            />
            <Typography variant="body2" color="textPrimary">
              {addOn.price}
            </Typography>
          </Box>
        ))}
        <Box sx={{ display: "flex", gap: 30, mt: 10 }}>
          <Button variant="outlined" onClick={handleBack}>
            Go Back
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Next Step
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddOns;

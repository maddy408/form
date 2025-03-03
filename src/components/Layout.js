import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import bgImageDesktop from "../assets/bg-sidebar-desktop.svg";
import bgImageMobile from "../assets/bg-sidebar-mobile.svg";

const Layout = ({ children, activeStep }) => {
  const steps = ["Step 1: Your Info", "Step 2: Select Plan", "Step 3: Add-Ons", "Step 4: Summary"];

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
      {/* Sidebar with Stepper */}
      <Box
        sx={{
          width: { xs: "100%", md: 300 },
          height: { xs: 250, md: "100vh" },
          backgroundImage: {
            xs: `url(${bgImageMobile})`,
            md: `url(${bgImageDesktop})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: { xs: 0, md: 5 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical" sx={{ color: "white", padding: 2 }}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel sx={{ color: "white" }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
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
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

import React, { useState } from "react";
import bgImageDesktop from "../assets/bg-sidebar-desktop.svg"; 
import bgImageMobile from "../assets/bg-sidebar-mobile.svg"; 
import { Box, Typography, Button, Card, CardContent, Switch } from "@mui/material";

const plans = [
  { id: 1, name: "Arcade", monthlyPrice: "$0/mo", yearlyPrice: "$90/yr" },
  { id: 2, name: "Advanced", monthlyPrice: "$12/mo", yearlyPrice: "$120/yr" },
  { id: 3, name: "Pro", monthlyPrice: "$15/mo", yearlyPrice: "$150/yr" },
];

const SelectPlan = ({ handleNext, handleBack, activeStep }) => {
  const [selectedPlan, setSelectedPlan] = useState(null); 
  const [isYearly, setIsYearly] = useState(false); 

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = () => {
    if (selectedPlan) {
      console.log("Selected Plan:", selectedPlan);
      handleNext();
    } else {
      alert("Please select a plan before proceeding.");
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
          marginTop: { xs: 0, md: 5 },
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
      ></Box>

      
      <Box
        sx={{
          marginTop: { xs: 0, md: 5 },
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
        <Typography variant="h4" gutterBottom>
          <b>Select Your Plan</b>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mb: 4,
            mt:5
          }}
        >
          {plans.map((plan) => (
            <Card
              key={plan.id}
              sx={{
                border: selectedPlan?.id === plan.id ? "2px solid #007bff" : "1px solid #ccc",
                borderRadius: 2,
                cursor: "pointer",
                maxWidth: 200,
                pt:4,
                textAlign: "center",
                p:2
              }}
              onClick={() => handlePlanSelect(plan)}
            >
              <CardContent>
                <Typography variant="h6">{plan.name}</Typography>
                <Typography>
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Monthly
          </Typography>
          <Switch
            sx={{ color: "primary" }}
            checked={isYearly}
            onChange={() => setIsYearly((prev) => !prev)}
          />
          <Typography variant="h6" gutterBottom>
            Yearly
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 25,
            justifyContent: "space-between",
            alignItems: "center",
            mt: 10,
          }}
        >
          <Button
            variant="outlined"
            size="medium"
            sx={{
              borderRadius: 1,
              gap: 4,
              justifyContent: "space-between",
              width: { xs: "100%", sm: "auto" },
              maxWidth: 100,
            }}
            onClick={handleBack}
          >
            Go Back
          </Button>

          <Button
            variant="contained"
            size="medium"
            sx={{
              borderRadius: 1,
              gap: 4,
              justifyContent: "space-between",
              width: { xs: "100%", sm: "auto" },
              maxWidth: 100,
            }}
            onClick={handleSubmit}
          >
            Next Step
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectPlan;

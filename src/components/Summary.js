import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Summary = ({ handleBack }) => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        <b>Summary</b>
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        This is the summary of your selections. Thank you!
      </Typography>
      <Button variant="outlined" onClick={handleBack}>
        Back
      </Button>
    </Box>
  );
};

export default Summary;

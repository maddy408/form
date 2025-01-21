import React, { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import SelectPlan from "./components/SelectPlans";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";


const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    } else {
      handleSubmit(); 
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form Submitted!"); 
    alert("Form submitted successfully!");
  };

  return (
    <div>
      
      {activeStep === 0 && <PersonalInfoForm handleNext={handleNext} />}
      {activeStep === 1 && <SelectPlan handleNext={handleNext} handleBack={handleBack} />}
      {activeStep === 2 && <AddOns handleNext={handleNext} handleBack={handleBack} />}
      {activeStep === 3 && <Summary handleBack={handleBack} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default App;










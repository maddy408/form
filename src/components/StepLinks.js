import { Link } from "react-router-dom";

const steps = [
  { label: "Your Info", path: "/" },
  { label: "Select Plan", path: "/select-plan" },
  { label: "Add-Ons", path: "/add-ons" },
  { label: "Summary", path: "/summary" },
];

const StepLinks = () => (
  <div style={{ padding: "20px", background: "#f0f0f0", height: "100vh" }}>
    {steps.map((step, index) => (
      <p key={index} style={{ marginBottom: "10px" }}>
        <Link to={step.path} style={{ textDecoration: "none", color: "blue" }}>
          {step.label}
        </Link>
      </p>
    ))}
  </div>
);

export default StepLinks;

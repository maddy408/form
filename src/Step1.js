

import React from "react";

const Step1 = () => {
  return (
    <div style={{ backgroundColor: "green", height: "100%", padding: "20px", color: "white" }}>
      <h2>Your Info</h2>
      <form>
        <label>
          Name: <input type="text" />
        </label>
        <br />
        <label>
          Email: <input type="email" />
        </label>
        <br />
        <button type="submit">Next Step</button>
      </form>
    </div>
  );
};

export default Step1;

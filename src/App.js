import React from "react";
import Calculator from "./components/Calculator";
import "./index.css"; // Ensure Tailwind styles are applied

const App = () => {
  return (
    <div className="text-3xl font-bold text-blue-500">
      Tailwind is Working!  
      FUK YEAR
      <Calculator />
    </div>
  );
};

export default App;
